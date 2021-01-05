class chain{

constructor(bodyA,bodyB){
    var options = {
        bodyA : bodyA,
        bodyB : bodyB ,
        stiffness : 0.05,
        length : 10
        
       }
       this. chain = Constraint.create(options);
    World.add(world,this.chain)
}
display(){

    if(this.chain.bodyA.position.x>100){
        stiffness:0
    }
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
}


}











