import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
import { SurveyService } from 'src/app/services/survey.service';
import { JWTTokenService } from 'src/app/services/jwttoken.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
})
export class SetupComponent implements OnInit {
  selectedTitle!: string;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  public orgnizatioId:string="";
  public userTokenData:any;
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  constructor(public dialog: MatDialog,private surveyService:SurveyService,private auth:AuthService) {}
  ngOnInit() {
    this.userTokenData=this.auth.decodeToken();
    this.bindDropDown();
  }
  bindDropDown(){
    this.surveyService.getDropDown(this.userTokenData.OrganizationId).subscribe(res=>{
      console.log(res);
    })
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(StaticIconsDialog, {
      width: '470px',
      height: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  ngOnDestroy(){
    console.log("destroying child...")
  }
}

@Component({
  selector: 'static-icons-dialog',
  templateUrl: './static-icons-dialog.component.html',
  styleUrls: ['./setup.component.css'],
})
export class StaticIconsDialog {
  staticIcons: any[] = [
    {
      value: 1,
      icons: [
        { text: 'Negative', url: '../../../assets/images/survey-images/Dissatisfied.gif' },
        { text: 'Normal', url: '../../../assets/images/survey-images/Satisfied.gif' },
        { text: 'Positive', url: '../../../assets/images/survey-images/Exceeded Expectations.gif' },
      ],
    },
    {
      value: 1,
      icons: [
        { text: 'Negative', url: '../../../assets/images/survey-images/Dissatisfied.gif' },
        { text: 'Normal', url: '../../../assets/images/survey-images/Satisfied.gif' },
        { text: 'Positive', url: '../../../assets/images/survey-images/Exceeded Expectations.gif' },
      ],
    },
    {
      value: 1,
      icons: [
        { text: 'Negative', url: '../../../assets/images/survey-images/Dissatisfied.gif' },
        { text: 'Normal', url: '../../../assets/images/survey-images/Satisfied.gif' },
        { text: 'Positive', url: '../../../assets/images/survey-images/Exceeded Expectations.gif' },
      ],
    },
    {
      value: 1,
      icons: [
        { text: 'Negative', url: '../../../assets/images/survey-images/Dissatisfied.gif' },
        { text: 'Normal', url: '../../../assets/images/survey-images/Satisfied.gif' },
        { text: 'Positive', url: '../../../assets/images/survey-images/Exceeded Expectations.gif' },
      ],
    },
  ];

  constructor(public dialogRef: MatDialogRef<StaticIconsDialog>) {}
  
}
