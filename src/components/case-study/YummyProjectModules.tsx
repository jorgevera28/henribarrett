import React from 'react';

// =========================================================================
// 1. PATTERN BANNER ONE
// 4 Segments:
// - Violet (#5A2D82) with white chevron zig-zags
// - Bright Yellow (#FED100) with orange undulating wave lines
// - Deep Red-Orange (#D83820) with darker red repeating triangles
// - Vivid Orange (#FF5D00) with teal/cyan (#00BFA5) chevron zig-zag stripes
// =========================================================================
export const YummyPatternBannerOne: React.FC = () => {
  return (
    <div className="w-full overflow-hidden shadow-sm aspect-[4/1] sm:aspect-[6/1] md:aspect-[8/1] min-h-[90px] sm:min-h-[120px] md:min-h-[140px]">
      <svg
        viewBox="0 0 1200 200"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Pattern 1: Purple Chevron Zigzags */}
          <pattern id="purple-chevron" width="60" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M0 10 L30 30 L60 10 M0 20 L30 40 L60 20 M0 30 L30 50 L60 30 M0 0 L30 20 L60 0 M0 -10 L30 10 L60 -10"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="6.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </pattern>

          {/* Pattern 2: Yellow with Orange Waves */}
          <pattern id="yellow-waves" width="50" height="30" patternUnits="userSpaceOnUse">
            <path
              d="M0 5 Q12.5 0 25 5 T50 5 M0 15 Q12.5 10 25 15 T50 15 M0 25 Q12.5 20 25 25 T50 25"
              fill="none"
              stroke="#FF3B30"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </pattern>

          {/* Pattern 3: Red with Dark Red Triangles */}
          <pattern id="red-triangles" width="40" height="40" patternUnits="userSpaceOnUse">
            <polygon points="0,0 20,40 0,40" fill="#A82010" />
            <polygon points="20,40 40,0 40,40" fill="#8C170B" />
            <polygon points="20,0 40,0 20,40" fill="#B32414" />
          </pattern>

          {/* Pattern 4: Orange with Teal Chevron Zigzags */}
          <pattern id="orange-teal-chevron" width="60" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M0 10 L30 30 L60 10 M0 20 L30 40 L60 20 M0 30 L30 50 L60 30 M0 0 L30 20 L60 0 M0 -10 L30 10 L60 -10"
              fill="none"
              stroke="#00C9B7"
              strokeWidth="6.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </pattern>
        </defs>

        {/* 4 Equal Segments of width 300 each */}
        {/* Segment 1: Purple */}
        <rect x="0" y="0" width="300" height="200" fill="#582C83" />
        <rect x="0" y="0" width="300" height="200" fill="url(#purple-chevron)" />

        {/* Segment 2: Yellow */}
        <rect x="300" y="0" width="300" height="200" fill="#FFCC00" />
        <rect x="300" y="0" width="300" height="200" fill="url(#yellow-waves)" />

        {/* Segment 3: Red Triangles */}
        <rect x="600" y="0" width="300" height="200" fill="#D9381E" />
        <rect x="600" y="0" width="300" height="200" fill="url(#red-triangles)" />

        {/* Segment 4: Orange with Teal Chevron */}
        <rect x="900" y="0" width="300" height="200" fill="#FF5500" />
        <rect x="900" y="0" width="300" height="200" fill="url(#orange-teal-chevron)" />
      </svg>
    </div>
  );
};

// =========================================================================
// 2. ICON GRID: 20 FLAT ICONS ON LAVENDER (#D6CBEE)
// 4 Rows x 5 Columns
// =========================================================================
export const YummyIconGrid: React.FC = () => {
  return (
    <div className="w-full bg-[#D4C8EB] py-10 sm:py-16 md:py-20 px-4 sm:px-10 md:px-16 flex items-center justify-center shadow-sm">
      <div className="grid grid-cols-5 gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-6 sm:gap-y-10 md:gap-y-12 max-w-[900px] w-full justify-items-center items-center">
        
        {/* ROW 1 */}
        {/* 1. Burger */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          {/* Top Bun */}
          <path d="M14 38 C14 20 66 20 66 38 Z" fill="#D9822B" />
          {/* Sesame seeds */}
          <ellipse cx="32" cy="27" rx="2" ry="1.2" fill="#FFE0B2" transform="rotate(-15 32 27)" />
          <ellipse cx="44" cy="25" rx="2" ry="1.2" fill="#FFE0B2" transform="rotate(10 44 25)" />
          <ellipse cx="52" cy="30" rx="2" ry="1.2" fill="#FFE0B2" transform="rotate(-5 52 30)" />
          {/* Lettuce */}
          <path d="M10 40 Q20 36 30 40 Q40 44 50 40 Q60 36 70 40 L68 44 Q58 41 48 44 Q38 47 28 44 Q18 41 12 44 Z" fill="#48BB78" />
          {/* Cheese */}
          <polygon points="12,43 68,43 60,50 42,50 36,54 28,47 16,50" fill="#ECC94B" />
          {/* Patty */}
          <rect x="14" y="47" width="52" height="10" rx="5" fill="#744210" />
          {/* Bottom Bun */}
          <path d="M16 57 C16 57 16 66 24 66 L56 66 C64 66 64 57 64 57 Z" fill="#D9822B" />
        </svg>

        {/* 2. Pizza */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          {/* Crust */}
          <path d="M15 20 Q40 8 65 20 L40 70 Z" fill="#ECC94B" />
          <path d="M15 20 Q40 8 65 20 L62 25 Q40 14 18 25 Z" fill="#D69E2E" />
          {/* Cheese / Sauce Base */}
          <polygon points="20,26 60,26 40,64" fill="#F6AD55" />
          {/* Pepperonis */}
          <circle cx="34" cy="34" r="5" fill="#E53E3E" />
          <circle cx="48" cy="38" r="4.5" fill="#E53E3E" />
          <circle cx="39" cy="48" r="4" fill="#E53E3E" />
        </svg>

        {/* 3. Avocado */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          {/* Outer Skin */}
          <path d="M40 12 C28 12 20 28 20 46 C20 62 29 70 40 70 C51 70 60 62 60 46 C60 28 52 12 40 12 Z" fill="#276749" />
          {/* Flesh */}
          <path d="M40 16 C30 16 23 30 23 46 C23 60 31 67 40 67 C49 67 57 60 57 46 C57 30 50 16 40 16 Z" fill="#9AE6B4" />
          {/* Seed */}
          <circle cx="40" cy="48" r="11" fill="#7B341E" />
          <ellipse cx="37" cy="45" rx="3" ry="2" fill="#9C4221" opacity="0.6" />
        </svg>

        {/* 4. Broccoli */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          {/* Stem */}
          <path d="M35 48 L33 68 C33 70 47 70 47 68 L45 48 Z" fill="#68D391" />
          {/* Florets */}
          <circle cx="40" cy="28" r="14" fill="#2F855A" />
          <circle cx="28" cy="36" r="12" fill="#276749" />
          <circle cx="52" cy="36" r="12" fill="#276749" />
          <circle cx="34" cy="44" r="10" fill="#2F855A" />
          <circle cx="46" cy="44" r="10" fill="#2F855A" />
          <circle cx="40" cy="38" r="11" fill="#38A169" />
        </svg>

        {/* 5. Salad Bowl */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          {/* Greens inside */}
          <circle cx="30" cy="35" r="9" fill="#48BB78" />
          <circle cx="45" cy="32" r="10" fill="#38A169" />
          <circle cx="54" cy="36" r="8" fill="#68D391" />
          <circle cx="40" cy="36" r="8" fill="#E2E8F0" />
          {/* Yellow Ceramic Bowl */}
          <path d="M16 40 Q40 40 64 40 C64 58 54 66 40 66 C26 66 16 58 16 40 Z" fill="#ECC94B" />
          <ellipse cx="40" cy="40" rx="24" ry="4" fill="#D69E2E" />
        </svg>

        {/* ROW 2 */}
        {/* 6. Roast Chicken */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          {/* Body */}
          <ellipse cx="38" cy="45" rx="22" ry="14" fill="#ED8936" />
          {/* Wing */}
          <ellipse cx="34" cy="42" rx="12" ry="6" fill="#DD6B20" />
          {/* Drumstick */}
          <ellipse cx="54" cy="40" rx="10" ry="7" fill="#DD6B20" transform="rotate(-20 54 40)" />
          <circle cx="63" cy="34" r="3.5" fill="#ED8936" />
          <circle cx="65" cy="38" r="3.5" fill="#ED8936" />
          {/* Tail */}
          <path d="M16 45 C12 40 18 36 22 40 Z" fill="#DD6B20" />
        </svg>

        {/* 7. Sushi */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          {/* Left Roll */}
          <g transform="translate(14, 30)">
            <rect x="0" y="6" width="22" height="24" rx="4" fill="#1A202C" />
            <ellipse cx="11" cy="6" rx="11" ry="5" fill="#EDF2F7" />
            <circle cx="11" cy="6" r="3.5" fill="#F56565" />
            <circle cx="14" cy="6" r="1.5" fill="#48BB78" />
          </g>
          {/* Right Roll */}
          <g transform="translate(42, 30)">
            <rect x="0" y="6" width="22" height="24" rx="4" fill="#1A202C" />
            <ellipse cx="11" cy="6" rx="11" ry="5" fill="#EDF2F7" />
            <circle cx="11" cy="6" r="3.5" fill="#ED8936" />
            <circle cx="8" cy="6" r="1.5" fill="#48BB78" />
          </g>
        </svg>

        {/* 8. Tomato */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          <circle cx="40" cy="46" r="20" fill="#E53E3E" />
          <ellipse cx="32" cy="40" rx="5" ry="3" fill="#FC8181" opacity="0.6" />
          {/* Stem */}
          <path d="M40 26 L40 20" stroke="#38A169" strokeWidth="4" strokeLinecap="round" />
          <path d="M40 26 L32 23 M40 26 L48 23 M40 26 L35 30 M40 26 L45 30" stroke="#38A169" strokeWidth="3" strokeLinecap="round" />
        </svg>

        {/* 9. Carrots */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          {/* Left Carrot */}
          <g transform="translate(24, 22) rotate(-10)">
            <path d="M6 10 C3 10 0 13 2 20 L6 42 L10 20 C12 13 9 10 6 10 Z" fill="#ED8936" />
            <path d="M6 10 L4 0 M6 10 L6 0 M6 10 L9 2" stroke="#48BB78" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          {/* Right Carrot */}
          <g transform="translate(42, 20) rotate(15)">
            <path d="M6 10 C3 10 0 13 2 20 L6 42 L10 20 C12 13 9 10 6 10 Z" fill="#DD6B20" />
            <path d="M6 10 L3 2 M6 10 L6 0 M6 10 L8 0" stroke="#48BB78" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>

        {/* 10. Donut */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          {/* Base */}
          <circle cx="40" cy="40" r="21" fill="#D69E2E" />
          {/* Glaze */}
          <circle cx="40" cy="40" r="19" fill="#ED64A6" />
          {/* Hole */}
          <circle cx="40" cy="40" r="7.5" fill="#D4C8EB" />
          {/* Sprinkles */}
          <line x1="28" y1="30" x2="33" y2="29" stroke="#FEFCBF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="48" y1="28" x2="52" y2="33" stroke="#68D391" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="53" y1="46" x2="49" y2="50" stroke="#63B3ED" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="30" y1="48" x2="35" y2="51" stroke="#FAF089" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="38" y1="24" x2="43" y2="26" stroke="#FC8181" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

        {/* ROW 3 */}
        {/* 11. Capsule / Pill */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          <g transform="translate(40, 40) rotate(-35) translate(-40, -40)">
            {/* Top Half Coral */}
            <path d="M26 36 C26 28 32 22 40 22 C48 22 54 28 54 36 L54 40 L26 40 Z" fill="#F56565" />
            {/* Bottom Half White */}
            <path d="M26 40 L54 40 L54 44 C54 52 48 58 40 58 C32 58 26 52 26 44 Z" fill="#FFFFFF" />
          </g>
        </svg>

        {/* 12. Delivery Car */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          {/* Roof Box / Sign */}
          <rect x="30" y="24" width="20" height="7" rx="3" fill="#DD6B20" />
          {/* Cabin */}
          <path d="M20 40 L30 32 L54 32 L62 40 Z" fill="#ECC94B" />
          {/* Window */}
          <path d="M32 34 L52 34 L58 40 L30 40 Z" fill="#90CDF4" />
          {/* Body */}
          <rect x="14" y="40" width="54" height="15" rx="5" fill="#D69E2E" />
          {/* Wheels */}
          <circle cx="26" cy="55" r="7" fill="#2D3748" />
          <circle cx="26" cy="55" r="3" fill="#CBD5E0" />
          <circle cx="56" cy="55" r="7" fill="#2D3748" />
          <circle cx="56" cy="55" r="3" fill="#CBD5E0" />
        </svg>

        {/* 13. Cake Slice */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          {/* Strawberry */}
          <circle cx="44" cy="22" r="5" fill="#E53E3E" />
          {/* Cake Body */}
          <polygon points="18,34 62,28 62,56 18,60" fill="#744210" />
          {/* Cream Layer */}
          <polygon points="18,45 62,40 62,44 18,49" fill="#FFF5F5" />
          {/* Top Frosting */}
          <polygon points="18,34 62,28 50,25 10,31" fill="#975A16" />
        </svg>

        {/* 14. Cupcake */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          {/* Frosting */}
          <path d="M22 42 C18 42 16 36 24 34 C24 26 36 24 40 24 C44 24 56 26 56 34 C64 36 62 42 58 42 Z" fill="#ECC94B" />
          <circle cx="40" cy="22" r="3.5" fill="#E53E3E" />
          {/* Cup */}
          <polygon points="23,42 57,42 52,64 28,64" fill="#ED8936" />
          {/* Cup Ribs */}
          <line x1="33" y1="42" x2="33" y2="64" stroke="#DD6B20" strokeWidth="2" />
          <line x1="40" y1="42" x2="40" y2="64" stroke="#DD6B20" strokeWidth="2" />
          <line x1="47" y1="42" x2="47" y2="64" stroke="#DD6B20" strokeWidth="2" />
        </svg>

        {/* 15. Cookie */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          <circle cx="40" cy="40" r="20" fill="#D69E2E" />
          {/* Chocolate Chips */}
          <circle cx="32" cy="32" r="3" fill="#744210" />
          <circle cx="46" cy="30" r="2.5" fill="#744210" />
          <circle cx="36" cy="42" r="3" fill="#744210" />
          <circle cx="48" cy="44" r="3.5" fill="#744210" />
          <circle cx="30" cy="50" r="2" fill="#744210" />
          <circle cx="42" cy="52" r="2.5" fill="#744210" />
        </svg>

        {/* ROW 4 */}
        {/* 16. Electric Plug */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          {/* Prongs */}
          <line x1="16" y1="36" x2="24" y2="36" stroke="#A0AEC0" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="16" y1="44" x2="24" y2="44" stroke="#A0AEC0" strokeWidth="3.5" strokeLinecap="round" />
          {/* Body */}
          <rect x="24" y="30" width="20" height="20" rx="5" fill="#B794F4" />
          {/* Coiled Cord */}
          <path d="M44 40 C52 40 50 56 60 52 C65 50 68 56 66 64" fill="none" stroke="#6B46C1" strokeWidth="3" strokeLinecap="round" />
        </svg>

        {/* 17. Delivery Box */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          {/* Box Front */}
          <rect x="20" y="30" width="40" height="34" rx="3" fill="#D69E2E" />
          {/* Tape */}
          <line x1="40" y1="30" x2="40" y2="64" stroke="#B7791F" strokeWidth="5" />
          {/* Handle holes / shipping icon */}
          <rect x="25" y="52" width="6" height="4" rx="1" fill="#744210" opacity="0.6" />
          <rect x="33" y="52" width="4" height="4" rx="1" fill="#744210" opacity="0.6" />
        </svg>

        {/* 18. Ice Cream Cone */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          {/* Scoop */}
          <circle cx="40" cy="32" r="14" fill="#C05621" />
          {/* Cone */}
          <polygon points="26,38 54,38 40,68" fill="#D69E2E" />
          <line x1="31" y1="44" x2="49" y2="44" stroke="#B7791F" strokeWidth="1.5" />
          <line x1="34" y1="52" x2="46" y2="52" stroke="#B7791F" strokeWidth="1.5" />
        </svg>

        {/* 19. Burrito / Wrap */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          <g transform="translate(40, 40) rotate(-15) translate(-40, -40)">
            {/* Wrap Body */}
            <rect x="24" y="32" width="32" height="34" rx="4" fill="#ECC94B" />
            {/* Paper band */}
            <rect x="24" y="46" width="32" height="12" fill="#D69E2E" />
            {/* Fillings peeking top */}
            <circle cx="32" cy="28" r="5" fill="#48BB78" />
            <circle cx="40" cy="26" r="4" fill="#E53E3E" />
            <circle cx="48" cy="29" r="4.5" fill="#ED8936" />
          </g>
        </svg>

        {/* 20. Carrots Bunch */}
        <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          <g transform="translate(18, 22)">
            {/* Carrot 1 */}
            <g transform="rotate(-15 15 20)">
              <polygon points="10,12 18,12 14,46" fill="#ED8936" />
              <path d="M14 12 L10 2 M14 12 L14 0 M14 12 L18 3" stroke="#48BB78" strokeWidth="2.5" strokeLinecap="round" />
            </g>
            {/* Carrot 2 */}
            <g transform="rotate(15 25 20)">
              <polygon points="20,12 28,12 24,46" fill="#DD6B20" />
              <path d="M24 12 L20 2 M24 12 L24 0 M24 12 L28 3" stroke="#48BB78" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </g>
        </svg>

      </div>
    </div>
  );
};

// =========================================================================
// 3. PATTERN BANNER TWO
// 4 Segments:
// - Red/Orange (#E83B25) with white vertical bars
// - Magenta (#E63273) with yellow polka dots (4x4 matrix)
// - Violet (#5A2D82) with white diagonal stripes
// - Bright Yellow (#FED100) with magenta chevron zig-zag stripes
// =========================================================================
export const YummyPatternBannerTwo: React.FC = () => {
  return (
    <div className="w-full overflow-hidden shadow-sm aspect-[4/1] sm:aspect-[6/1] md:aspect-[8/1] min-h-[90px] sm:min-h-[120px] md:min-h-[140px]">
      <svg
        viewBox="0 0 1200 200"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Pattern 1: Red with White Vertical Bars */}
          <pattern id="red-vertical-bars" width="30" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="12" height="20" fill="#FFFFFF" />
          </pattern>

          {/* Pattern 2: Magenta with Yellow Polka Dots */}
          <pattern id="magenta-yellow-dots" width="45" height="45" patternUnits="userSpaceOnUse">
            <circle cx="22.5" cy="22.5" r="9.5" fill="#FFE500" />
          </pattern>

          {/* Pattern 3: Purple Diagonal Stripes */}
          <pattern id="purple-diagonal-stripes" width="35" height="35" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="35" stroke="#FFFFFF" strokeWidth="12" />
          </pattern>

          {/* Pattern 4: Yellow with Magenta Chevron Zigzags */}
          <pattern id="yellow-magenta-chevron" width="60" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M0 10 L30 30 L60 10 M0 20 L30 40 L60 20 M0 30 L30 50 L60 30 M0 0 L30 20 L60 0 M0 -10 L30 10 L60 -10"
              fill="none"
              stroke="#D6186C"
              strokeWidth="6.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </pattern>
        </defs>

        {/* 4 Equal Segments of width 300 each */}
        {/* Segment 1: Red Bars */}
        <rect x="0" y="0" width="300" height="200" fill="#E83B25" />
        <rect x="0" y="0" width="300" height="200" fill="url(#red-vertical-bars)" />

        {/* Segment 2: Magenta Yellow Dots */}
        <rect x="300" y="0" width="300" height="200" fill="#E63273" />
        <rect x="300" y="0" width="300" height="200" fill="url(#magenta-yellow-dots)" />

        {/* Segment 3: Purple Diagonal */}
        <rect x="600" y="0" width="300" height="200" fill="#582C83" />
        <rect x="600" y="0" width="300" height="200" fill="url(#purple-diagonal-stripes)" />

        {/* Segment 4: Yellow Magenta Chevron */}
        <rect x="900" y="0" width="300" height="200" fill="#FFCC00" />
        <rect x="900" y="0" width="300" height="200" fill="url(#yellow-magenta-chevron)" />
      </svg>
    </div>
  );
};

// =========================================================================
// 4. THREE PHONES MOCKUP ON WARM BEIGE (#E9E5DE)
// Three upright phone chassis:
// - Left: Mint green screen with purple squiggly wave icon
// - Middle: Pale lavender/pink screen
// - Right: Pastel butter yellow screen
// =========================================================================
export const YummyThreePhonesMockup: React.FC = () => {
  return (
    <div className="w-full bg-[#E8E4DD] py-14 sm:py-20 md:py-28 px-4 sm:px-8 flex items-center justify-center shadow-sm">
      <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-14 max-w-[840px] w-full">
        
        {/* Phone 1: Mint Green with Lavender Squiggle */}
        <div className="w-[28%] sm:w-[26%] max-w-[210px] aspect-[9/18.5] bg-black rounded-[28px] sm:rounded-[36px] md:rounded-[42px] p-[3px] sm:p-[4px] md:p-[5px] shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
          <div className="w-full h-full bg-[#B2E4CD] rounded-[24px] sm:rounded-[32px] md:rounded-[38px] flex items-center justify-center relative overflow-hidden">
            {/* Speaker notch */}
            <div className="absolute top-2 w-12 h-3 bg-black/15 rounded-full" />
            
            {/* Centered wavy brand motif */}
            <svg viewBox="0 0 60 60" className="w-10 h-10 sm:w-14 sm:h-14 opacity-80">
              <path
                d="M10 20 Q20 12 30 20 T50 20 M10 30 Q20 22 30 30 T50 30 M10 40 Q20 32 30 40 T50 40"
                fill="none"
                stroke="#8A74AB"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Phone 2: Pale Lavender */}
        <div className="w-[28%] sm:w-[26%] max-w-[210px] aspect-[9/18.5] bg-black rounded-[28px] sm:rounded-[36px] md:rounded-[42px] p-[3px] sm:p-[4px] md:p-[5px] shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
          <div className="w-full h-full bg-[#E5DDF0] rounded-[24px] sm:rounded-[32px] md:rounded-[38px] flex items-center justify-center relative overflow-hidden">
            {/* Speaker notch */}
            <div className="absolute top-2 w-12 h-3 bg-black/15 rounded-full" />
          </div>
        </div>

        {/* Phone 3: Pastel Yellow */}
        <div className="w-[28%] sm:w-[26%] max-w-[210px] aspect-[9/18.5] bg-black rounded-[28px] sm:rounded-[36px] md:rounded-[42px] p-[3px] sm:p-[4px] md:p-[5px] shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
          <div className="w-full h-full bg-[#F5EDB0] rounded-[24px] sm:rounded-[32px] md:rounded-[38px] flex items-center justify-center relative overflow-hidden">
            {/* Speaker notch */}
            <div className="absolute top-2 w-12 h-3 bg-black/15 rounded-full" />
          </div>
        </div>

      </div>
    </div>
  );
};
