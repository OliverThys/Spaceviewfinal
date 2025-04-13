export function scaleDistance(realUA: number): number {
    // Échelle logarithmique compressée
    return Math.log(realUA + 1) * 8 // +1 pour éviter log(0)
  }
  