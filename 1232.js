// 在一个 XY 坐标系中有一些点，我们用数组 coordinates 来分别记录它们的坐标，其中 coordinates[i] = [x, y] 表示横坐标为 x、纵坐标为 y 的点。
// 请你来判断，这些点是否在该坐标系中属于同一条直线上，是则返回 true，否则请返回 false。


var checkStraightLine = function(coordinates) {
        var len = coordinates.length;
        for (let i = 1; i < len - 1; ++i) {
            let y1 = coordinates[i][1] -coordinates[i-1][1];
            let x1 = coordinates[i][0] -coordinates[i-1][0];
            let y2 = coordinates[i+1][1] -coordinates[i][1];         
            let x2 = coordinates[i+1][0] -coordinates[i][0];
            if (y1*x2 != y2*x1) {
                return false;
            }
        }
        return true;
}