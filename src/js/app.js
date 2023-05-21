export default function healthLevel(persObj) {
  if (persObj.health > 50) {
    return 'healthy';
  } if (persObj.health <= 50 && persObj.health > 15) {
    return 'wounded';
  }
  return 'critical';
}
