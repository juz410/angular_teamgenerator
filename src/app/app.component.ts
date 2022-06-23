import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName ='';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams:number | '' ='';
  teams :string[][]= [];



  
  onInput(members : string){
    this.newMemberName=members;
    
  }

  onNumberOfTeamsInput(value : string){
    this.numberOfTeams = Number(value);
    
  }

  addMember(){

    if(!this.newMemberName){
      this.errorMessage = "Name can't be empty";
      return;
    }
    this.errorMessage="";
    this.members.push(this.newMemberName);
    this.newMemberName = "";
    
  }

  generateTeams(){

    if(!this.numberOfTeams || this.numberOfTeams <=0){
      this.errorMessage="Invalud number of Teams"
      this.numberOfTeams='';
      return;
    }
    
    if(this.numberOfTeams>this.members.length){
      this.errorMessage="Not Enough Members";
      this.numberOfTeams='';
      return;
    }
    this.errorMessage='';

    const allMembers = [...this.members];
    while(allMembers.length){
      for(let i = 0; i < this.numberOfTeams;i++){
        
       
      
        const randomIndex = Math.floor(Math.random()*allMembers.length);
        const member = allMembers.splice(randomIndex,1)[0];
        if(!member){break;}
        if(this.teams[i]){
          this.teams[i].push(member);
        }else{
          this.teams[i] = [member];
        }
      }
    }
    
    console.log(this.teams);
    
    this.members=[];
    this.numberOfTeams='';

  }
  

}
