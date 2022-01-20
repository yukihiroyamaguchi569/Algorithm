/**
* 同じ場所を通らないロボットを考える
*　前後左右のみに動く

* 12回移動するときに、移動経路はいくつあるか？
*/

// 座標を配列で表し、履歴とマッチしない場合、移動する

function cleaningRobot(){

    const histories =[[0,0]];
    const directions = [[1,0],[0,1],[-1,0],[0,-1]];

    const makeNewHistory = array =>  

    for (const history of histories){    //[0,0]
        for (const direction of directions) {
            const newPosition = [(history[0] + direction[0]),
                                 (history[1] + direction[1])];  
            console.log(newPosition);
            
        }
    }
}

