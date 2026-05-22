export function formatBio(bio: string, maxLength: number = 100): string {
  if (bio.length <= maxLength) return bio
  return bio.substring(0, maxLength).trimEnd() + '...'
}
git add .
git commit -m "perbaikan: kembalikan fungsi formatBio"
git push