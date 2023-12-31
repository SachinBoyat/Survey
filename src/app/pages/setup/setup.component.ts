import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
import { SurveyService } from 'src/app/services/survey.service';
import { JWTTokenService } from 'src/app/services/jwttoken.service';
import { AuthService } from 'src/app/services/auth.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
})
export class SetupComponent implements OnInit {
  selectedTitle!: string;
  customHeading: string = '';
  color: ThemePalette = 'accent';
  copyTheCode: any = '';
  disabled = false;
  headingVariant: any[] = [];
  orgnizatioId: string = '';
  userTokenData: any;
  selectedPack: any = [
    { reactionPack: 0, isSelected: true },
    { reactionPack: 1, isSelected: false },
    { reactionPack: 2, isSelected: false },
  ];

  // default survey data
  previewSurveyData: any = {
    _id: '',
    organizationId: '',
    title: '',
    fontSize: '',
    fontFamily: '',
    isRecationOff: true,
    isReviewOff: true,
    fontColor: '',
    language: '',
    reactionPack: 0,
    headingType: 1,
    iconSetId: 0,
    createdBy: '',
    createdDate: new Date(),
    lastModifiedBy: new Date(),
    lastModifiedDate: new Date(),
  };

  // FIXME: the idea is to move this data to separate default data file in future
  reactionPackItems: any[] = [
    [
      {
        value: 1,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/1-1.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/1-2.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/1-3.png',
          },
        ],
      },
      {
        value: 2,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/2-1.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/2-2.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/2-3.png',
          },
        ],
      },
      {
        value: 3,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/3-1.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/3-2.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/3-3.png',
          },
        ],
      },
      {
        value: 4,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/4-1.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/4-2.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/4-3.png',
          },
        ],
      },
      {
        value: 5,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/5-1.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/5-2.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/5-3.png',
          },
        ],
      },
      {
        value: 6,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/6-1.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/6-2.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/6-3.png',
          },
        ],
      },
      {
        value: 7,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/7-1.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/7-2.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/7-3.png',
          },
        ],
      },
      {
        value: 8,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/8-1.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/8-2.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/8-3.png',
          },
        ],
      },
      {
        value: 9,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/9-1.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/9-2.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/9-3.png',
          },
        ],
      },
      {
        value: 10,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/10-1.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/10-2.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/10-3.png',
          },
        ],
      },
    ],
    [
      {
        value: 1,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/59-5.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/59-3.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/59-2.png',
          },
          {
            text: 'Angry',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/59-4.png',
          },
        ],
      },
      {
        value: 2,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/60-2.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/60-3.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/60-4.png',
          },
          {
            text: 'Angry',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/60-1.png',
          },
        ],
      },
      {
        value: 3,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/61-2.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/61-3.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/61-4.png',
          },
          {
            text: 'Angry',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/61-1.png',
          },
        ],
      },
      {
        value: 4,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/62-4.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/62-3.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/62-1.png',
          },
          {
            text: 'Angry',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/62-5.png',
          },
        ],
      },
      {
        value: 5,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/63-4.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/63-3.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/63-1.png',
          },
          {
            text: 'Angry',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/63-5.png',
          },
        ],
      },
    ],
    [
      {
        value: 1,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/59-5.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/59-3.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/59-2.png',
          },
          {
            text: 'Unhappy',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/59-1.png',
          },
          {
            text: 'Angry',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/59-4.png',
          },
        ],
      },
      {
        value: 2,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/60-2.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/60-3.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/60-4.png',
          },
          {
            text: 'Unhappy',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/60-2.png',
          },
          {
            text: 'Angry',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/60-1.png',
          },
        ],
      },
      {
        value: 3,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/61-2.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/61-3.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/61-4.png',
          },
          {
            text: 'Unhappy',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/61-2.png',
          },
          {
            text: 'Angry',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/61-1.png',
          },
        ],
      },
      {
        value: 4,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/62-4.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/62-3.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/62-1.png',
          },
          {
            text: 'Unhappy',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/62-4.png',
          },
          {
            text: 'Angry',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/62-5.png',
          },
        ],
      },
      {
        value: 5,
        icons: [
          {
            text: 'Negative',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/63-4.png',
          },
          {
            text: 'Normal',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/63-3.png',
          },
          {
            text: 'Positive',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/63-1.png',
          },
          {
            text: 'Unhappy',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/63-4.png',
          },
          {
            text: 'Angry',
            url: 'https://customer360storagedev.blob.core.windows.net/staticfiles/Icons/Static/63-5.png',
          },
        ],
      },
    ],
  ];

  constructor(
    public dialog: MatDialog,
    private surveyService: SurveyService,
    private auth: AuthService,
    private _snackBar: MatSnackBar
  ) {
    this.userTokenData = this.auth.decodeToken();
    this.previewSurveyData.organizationId = this.userTokenData.OrganizationId;
    // override the default survery data
    this.surveyService.getSurveyByOrgId(this.userTokenData.OrganizationId).subscribe(res => {
      if (res.length) {
        this.previewSurveyData = res[0];
        if (res[0].headingType === 2) this.customHeading = res[0].title;

        for (let reactCount of this.selectedPack) {
          reactCount.isSelected = false;
        }
        this.selectedPack[res[0].reactionPack].isSelected = true;
      }
    });
    // get the heading variant
    this.surveyService.getDropDown(this.userTokenData.OrganizationId).subscribe(res => {
      this.headingVariant = res;
    });
  }
  ngOnInit() {}
  // copy code snackbar
  openCopyTheCodeSnackbar(message: string, action: string) {
    this.generateCopyToCode();
    this._snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['blue-snackbar'],
    });
  }
  // copy to clipboard snackbar
  openCodeCopyTheCodeSnackbar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['blue-snackbar'],
    });
  }
  // handler to copy the html code of survey
  generateCopyToCode() {
    let imojiStr = ``;
    for (let icon of this.reactionPackItems[this.previewSurveyData.reactionPack][this.previewSurveyData.iconSetId]
      .icons) {
      imojiStr += `<span class="flex emoji">
          <img src="${icon.url}" height="50" width="50" />
          <span class="emojiText"> ${icon.text} </span>
        </span>`;
    }

    this.copyTheCode = `
    <style>
      .flex {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
      }

      .emoji {
        width: 80px;
        height: 110px;
      }

      .emojiText {
        font-size: 12px;
        margin-top: 10px;
        text-align: center
      }
    </style>
    <div class="flex">
      <h2>
        ${this.previewSurveyData.title.length ? this.previewSurveyData.title : this.headingVariant[0]?.name}
      </h2>
      <div class="flex"  style="flex-direction: row">
        ${imojiStr}
      </div>
    </div>`;
  }
  // to open the dialog when react pack selected
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, packCount: number, packData: any[]): void {
    let dialogRef = this.dialog.open(StaticIconsDialog, {
      width: '470px',
      height: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        packCount,
        packData,
        selectedData: {
          reactionPack: this.previewSurveyData.reactionPack,
          iconSetId: this.previewSurveyData.iconSetId,
        },
      },
    });

    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
      if (res) {
        this.previewSurveyData.reactionPack = res.reactionPack;
        this.previewSurveyData.iconSetId = res.iconSetId;
        this.surveyService.postUpdateSurveyData(this.previewSurveyData).subscribe(res => {
          if (res) {
            this.previewSurveyData = res;

            for (let reactCount of this.selectedPack) {
              reactCount.isSelected = false;
            }
            this.selectedPack[res.reactionPack].isSelected = true;
          }
        });
      }
    });
  }
  ngOnDestroy() {}
  // handler for custom heading typing
  customHeadingeHandler(val: string) {
    this.previewSurveyData.headingType = 2;
    this.previewSurveyData.title = val;
    this.surveyService.postUpdateSurveyData(this.previewSurveyData).subscribe(res => {
      if (res) this.previewSurveyData = res;
    });
  }
  // handler for stop/allow user Feedback
  allUserFeedbackHandler() {
    this.previewSurveyData.isRecationOff = !this.previewSurveyData.isRecationOff;
    this.surveyService.postUpdateSurveyData(this.previewSurveyData).subscribe(res => {
      if (res) this.previewSurveyData = res;
    });
  }
  // handler for stop/allow user Review
  allUserReviewHandler() {
    this.previewSurveyData.isReviewOff = !this.previewSurveyData.isReviewOff;
    this.surveyService.postUpdateSurveyData(this.previewSurveyData).subscribe(res => {
      if (res) this.previewSurveyData = res;
    });
  }
  //  handler for choosing the heading variant
  variantHeadingeHandler(selectedOption: any) {
    this.previewSurveyData.headingType = 1;
    this.previewSurveyData.title = selectedOption.name;
    this.surveyService.postUpdateSurveyData(this.previewSurveyData).subscribe(res => {
      if (res) this.previewSurveyData = res;
      this.customHeading = '';
    });
  }
  // handler for reaction pack count
  packCountHandler(count: number) {
    for (let reactCount of this.selectedPack) {
      if (reactCount.reactionPack === count) {
        reactCount.isSelected = true;
      } else {
        reactCount.isSelected = false;
      }
    }
  }
  // handler for copy the survey to clipboard
  copyMessage() {
    var copyImgBtn: any = document.querySelector('.copy-image');
    copyImgBtn.addEventListener('click', (event: Event) => {
      var imageElem: any = document.querySelector('.image-class');
      var range = document.createRange();
      range.selectNode(imageElem);
      const a: any = window.getSelection();
      a.addRange(range);

      try {
        // Now that we've selected the anchor text, execute the copy command
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy image command was ' + msg);
        this.openCodeCopyTheCodeSnackbar('Copied to Clipboard', '');
      } catch (err) {
        console.log('Oops, unable to copy');
      }

      // removeRange(range) when it is supported
      const b: any = window.getSelection();
      b.removeAllRanges();
    });
  }
}

@Component({
  selector: 'static-icons-dialog',
  templateUrl: './static-icons-dialog.component.html',
  styleUrls: ['./setup.component.css'],
})
export class StaticIconsDialog {
  constructor(public dialogRef: MatDialogRef<StaticIconsDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {}
  cancel() {
    // closing itself and sending data to parent component
    this.dialogRef.close({ data: 'you cancelled' });
  }

  confirm() {
    // closing itself and sending data to parent component
    this.dialogRef.close({ data: 'you confirmed' });
  }
}
