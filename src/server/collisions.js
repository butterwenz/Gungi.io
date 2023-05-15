const Constants = require('../shared/constants');

// 返回要銷毀的子彈數組。
function applyCollisions(players, bullets) {
  const destroyedBullets = [];
  for (let i = 0; i < bullets.length; i++) {
    // 尋找一個玩家（沒有創建子彈）來碰撞每顆子彈。
// 一旦我們找到一個，就跳出循環以防止重複計算子彈。
    for (let j = 0; j < players.length; j++) {
      const bullet = bullets[i];
      const player = players[j];
      if (
        bullet.parentID !== player.id &&
        player.distanceTo(bullet) <= Constants.PLAYER_RADIUS + Constants.BULLET_RADIUS
      ) {
        destroyedBullets.push(bullet);
        player.takeBulletDamage();
        break;
      }
    }
  }
  return destroyedBullets;
}

module.exports = applyCollisions;
