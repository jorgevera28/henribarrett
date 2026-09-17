import fs from 'fs';
import { execSync } from 'child_process';
execSync('git checkout src/components/case-study/*VisualView.tsx src/components/case-study/*ReadingView.tsx || true');
