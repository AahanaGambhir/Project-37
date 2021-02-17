class Contestant{ 
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null
    }
    
    
    getCount() {
         var ContestantCountRef = database.ref('ContestantCount');
         ContestantCountRef.on("value",function(data){
            ContestantCountRef = data.val();
         })
    }

    updateCount(count){
        database.ref('/').update({
        ContestantCount: count
        });
      
    }

    update() {
         var contestantIndex =  "contestants/contestant"  +  this.index;
         database.ref(contestantIndex).set({
             name : this.name, 
             distance : this.distance
         });
          
     }
    static getContestantInfo() {
      var contestantInfo =  database.ref('contestants')
      contestantInfo.on("value",(data)=>{
      allContestatns = data.val();   
      } )
    }
}