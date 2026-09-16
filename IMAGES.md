# Exact Images — How to replace placeholders

The preview at `https://id-preview--396a3e54-49cb-4e31-9563-2a258921633b.lovable.app/` requires Lovable auth (401) for `/assets/*`, so exact images can't be fetched anonymously.

## Current state
- `public/assets/hero-lashes-Bq3Gj_x5.jpg` — **exact hero** fetched from your R2 bucket (works): `https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/lovp_7pg3c87rtn82as16tzx4c98zcx/...png`
- `public/assets/style-long-short-CV3iuISA.jpg` — placeholder (Unsplash) — replace with exact
- `public/assets/style-cat-eye-Bc3On_zV.jpg` — placeholder (Unsplash) — replace with exact
- `public/assets/style-classic-CpurG3T6.jpg` — placeholder (Unsplash) — replace with exact
- `public/assets/style-classic-CpurG3T6.jpg` etc are wired in `src/App.tsx` as `"/assets/..."` (exact filenames from your HTML dump).

## To use exact images (pick one)

### Option A — Lovable Export (recommended)
1. In Lovable: Project → Settings → Export / Download ZIP or "Sync to GitHub"
2. Unzip, find:
   - `src/assets/hero-lashes-Bq3Gj_x5.jpg`
   - `src/assets/style-long-short-CV3iuISA.jpg`
   - `src/assets/style-cat-eye-Bc3On_zV.jpg`
   - `src/assets/style-classic-CpurG3T6.jpg`
3. Copy them to `/home/just/PROJECTS/brelashes/public/assets/` overwriting placeholders:
   ```bash
   cp ~/Downloads/lovp_7pg3c87rtn82as16tzx4c98zcx/src/assets/* public/assets/
   pnpm build
   ```

### Option B — Save from browser (while logged into Lovable)
1. Open `https://id-preview--396a3e54-49cb-4e31-9563-2a258921633b.lovable.app/` in a logged-in browser
2. Right-click each image → Save image as:
   - Hero: `hero-lashes-Bq3Gj_x5.jpg` → `public/assets/`
   - Style 1: `style-long-short-CV3iuISA.jpg`
   - Style 2: `style-cat-eye-Bc3On_zV.jpg`
   - Style 3: `style-classic-CpurG3T6.jpg`
3. `pnpm build && pnpm preview`

### Option C — I fetch if you provide them
Drop the 4 jpg files into `public/assets/` and I will verify `pnpm build` + preview.

## Verification
```bash
ls -lh public/assets/
pnpm build
# images will be copied to dist/assets/ and served at /assets/...
```
