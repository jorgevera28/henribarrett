import React from 'react';
import { motion } from 'motion/react';

export interface TextSegment {
  text: string;
  className?: string;
}

export interface MaskTextRevealProps {
  /** Text to reveal. Can include newlines '\n' to indicate line breaks */
  text?: string;
  /** Explicit array of lines to render (e.g. ["MEET THE", "MARKERS"]) */
  lines?: string[];
  /** Segments with custom per-segment styling (e.g. two-tone headlines) */
  segments?: TextSegment[];
  /** React children (string or elements) */
  children?: React.ReactNode;
  /** HTML tag to render (h1, h2, h3, h4, h5, h6, p, span, div) */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  /** Extra Tailwind classes for typography, sizing, colors, tracking */
  className?: string;
  /** Custom inline styles */
  style?: React.CSSProperties;
  /** How to split: 'words' (default) or 'lines' */
  splitBy?: 'words' | 'lines';
  /** Base delay before animation starts (in seconds) */
  delay?: number;
  /** Stagger time between consecutive words/lines (in seconds) */
  stagger?: number;
  /** Duration of each word reveal (in seconds) */
  duration?: number;
  /** Initial rotation angle in degrees from bottom-left (default: 5deg) */
  angle?: number;
  /** Trigger animation only once when scrolled into view (default: true) */
  once?: boolean;
  /** Percentage of element that must be visible to trigger (default: 0.18) */
  amount?: number | 'some' | 'all';
  /** Viewport margin offset to trigger right in the reading comfort zone as you scroll down (default: '0px 0px -70px 0px') */
  margin?: string;
  /** Animate immediately on mount instead of waiting for scroll */
  animateOnMount?: boolean;
  /** Transform origin corner (default: bottom left "0% 100%") */
  transformOrigin?: string;
}

// Auge Design signature luxury ease: cushioned launch with ultra-smooth, slow deceleration
const AUGE_EASE = [0.19, 1, 0.22, 1] as const;

// Static component map to prevent recreation of dynamic motion elements on every render
const MOTION_TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  p: motion.p,
  span: motion.span,
  div: motion.div,
} as const;

export const MaskTextReveal: React.FC<MaskTextRevealProps> = ({
  text,
  lines: explicitLines,
  segments,
  children,
  as: Component = 'h2',
  className = '',
  style,
  splitBy = 'words',
  delay = 0,
  stagger,
  duration,
  angle,
  once = true,
  amount = 0.18,
  margin = '0px 0px -70px 0px',
  animateOnMount = false,
  transformOrigin = '0% 100%',
}) => {
  // Determine text content
  const resolvedContent = text ?? (typeof children === 'string' ? children : null);
  const computedLines: string[] = explicitLines && explicitLines.length > 0
    ? explicitLines
    : resolvedContent ? resolvedContent.split('\n') : [];

  // Determine word count to tune stagger and timing dynamically for bajadas and body text
  const totalWordCount = React.useMemo(() => {
    if (segments && segments.length > 0) {
      return segments.reduce((acc, s) => acc + s.text.trim().split(/\s+/).length, 0);
    }
    return computedLines.reduce((acc, l) => acc + l.trim().split(/\s+/).length, 0);
  }, [segments, computedLines]);

  const isParagraphOrBajada = Component === 'p' || totalWordCount > 10;
  
  // Cadence: paragraphs/bajadas flow with liquid rhythm (~0.032s stagger, 1.25s duration)
  // Headlines and large display text take slightly more deliberate pauses (~0.052s stagger, 1.35s duration)
  const effectiveStagger = stagger ?? (isParagraphOrBajada ? 0.032 : 0.052);
  const effectiveDuration = duration ?? (isParagraphOrBajada ? 1.25 : 1.35);
  // Softer angle: 2.5° for body/bajadas (ultra-delicate), 3.2° for titles (sculptural)
  const effectiveAngle = angle ?? (isParagraphOrBajada ? 2.5 : 3.2);

  // Container variants with stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: effectiveStagger,
        delayChildren: delay,
      },
    },
  };

  // Words / lines variants: mask reveal from bottom-left with Auge Design easing
  const itemVariants = {
    hidden: {
      y: '110%',
      x: '-2%',
      rotate: effectiveAngle,
      opacity: 0,
    },
    visible: {
      y: '0%',
      x: '0%',
      rotate: 0,
      opacity: 1,
      transition: {
        duration: effectiveDuration,
        ease: AUGE_EASE,
      },
    },
  };

  // Static motion tag component
  const MotionTag = (Component && MOTION_TAGS[Component]) || motion.h2;

  // Viewport configuration for smooth progressive trigger while scrolling down
  const viewportConfig = { once, amount, margin };

  // 1. If segments are provided (e.g. multi-tone text where part is black and part is gray)
  if (segments && segments.length > 0) {
    return (
      <MotionTag
        initial="hidden"
        {...(animateOnMount
          ? { animate: 'visible' }
          : { whileInView: 'visible', viewport: viewportConfig })}
        variants={containerVariants}
        className={className}
        style={style}
      >
        {segments.map((seg, segIdx) => {
          const segWords = seg.text.split(/(\s+)/).filter(Boolean);

          return (
            <span key={`seg-${segIdx}`} className={seg.className || ''}>
              {segWords.map((item, itemIdx) => {
                const isSpace = /^\s+$/.test(item);
                if (isSpace) {
                  return <span key={`space-${segIdx}-${itemIdx}`}> </span>;
                }

                return (
                  <span
                    key={`word-${segIdx}-${itemIdx}`}
                    className="inline-block overflow-hidden pt-[0.06em] -mt-[0.06em] pb-[0.18em] -mb-[0.18em] align-top"
                  >
                    <motion.span
                      variants={itemVariants}
                      className="inline-block will-change-transform"
                      style={{ transformOrigin }}
                    >
                      {item}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </MotionTag>
    );
  }

  // Fallback if non-string children are passed
  if (!computedLines.length && children) {
    return (
      <MotionTag
        initial="hidden"
        {...(animateOnMount
          ? { animate: 'visible' }
          : { whileInView: 'visible', viewport: viewportConfig })}
        variants={containerVariants}
        className={className}
        style={style}
      >
        <span className="inline-block overflow-hidden pt-[0.06em] -mt-[0.06em] pb-[0.18em] -mb-[0.18em] align-bottom">
          <motion.span
            variants={itemVariants}
            className="inline-block will-change-transform"
            style={{ transformOrigin }}
          >
            {children}
          </motion.span>
        </span>
      </MotionTag>
    );
  }

  return (
    <MotionTag
      initial="hidden"
      {...(animateOnMount
        ? { animate: 'visible' }
        : { whileInView: 'visible', viewport: viewportConfig })}
      variants={containerVariants}
      className={className}
      style={style}
    >
      {computedLines.map((lineText, lineIdx) => {
        if (splitBy === 'lines') {
          return (
            <span
              key={`line-${lineIdx}`}
              className="block overflow-hidden pt-[0.06em] -mt-[0.06em] pb-[0.18em] -mb-[0.18em]"
            >
              <motion.span
                variants={itemVariants}
                className="block will-change-transform"
                style={{ transformOrigin }}
              >
                {lineText}
              </motion.span>
            </span>
          );
        }

        // Split words preserving whitespace
        const words = lineText.trim().split(/\s+/).filter(Boolean);

        return (
          <span
            key={`line-${lineIdx}`}
            className="block"
          >
            {words.map((word, wordIdx) => (
              <span
                key={`word-${lineIdx}-${wordIdx}`}
                className="inline-block overflow-hidden pt-[0.06em] -mt-[0.06em] pb-[0.18em] -mb-[0.18em] align-top mr-[0.26em] last:mr-0"
              >
                <motion.span
                  variants={itemVariants}
                  className="inline-block will-change-transform"
                  style={{ transformOrigin }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        );
      })}
    </MotionTag>
  );
};
