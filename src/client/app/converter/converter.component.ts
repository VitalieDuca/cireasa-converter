import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-converter',
  templateUrl: 'converter.component.html',
  styleUrls: ['converter.component.css']
})

export class ConverterComponent {
  cherriesCost: number = 200;

  cherryModifier: number = this.cherriesCost;
  valueModifier: number = 1;

  dolarExchange: number = 18.52;
  cherries: number = 12;
  value: number = this.cherries * this.cherriesCost;

  cherryUnits: Array<Object> = [{
    name: 'kg',
    value: this.cherriesCost
  }, {
    name: 'g',
    value: this.cherriesCost / 1000
  }, {
    name: 't',
    value: this.cherriesCost * 1000
  }, {
    name: 'buc',
    value: this.cherriesCost / 120
  }];

  valuesUnits: Array<Object> = [{
    name: 'MDL',
    value: 1
  }, {
    name: 'USD',
    value: this.dolarExchange
  }, {
    name: 'Dacii',
    value: 8000 * this.dolarExchange
  }, {
    name: 'Mercedes-uri',
    value: 34000 * this.dolarExchange
  }, {
    name: 'Iphone 7',
    value: 917 * this.dolarExchange
  }, {
    name: 'Salarii medii MD',
    value: 5300
  }];

  constructor() {
    //
  }
  // credca trebuie de facut un model class pentru unitati si bani sa nu arate erori in editor
  onCherriesChange(selectedValue: string): void {
    let unitFound: any = this.cherryUnits.find((unit: any) => {
      return (unit.name === selectedValue);
    });
    this.cherryModifier = unitFound.value;
    console.log(this.cherryModifier);
    this.updateValues((<any>document.forms)['converterForm'].cherries);
  }

  onValuesChange(selectedValue: string): void {
    let unitFound: any = this.valuesUnits.find((unit: any) => {
      return (unit.name === selectedValue);
    });

    this.valueModifier = unitFound.value;
    console.log(this.valueModifier);
    this.value = Math.round(100 * this.cherryModifier / this.valueModifier * this.cherries) / 100;
    this.cherries = Math.round(100 * (this.value * this.valueModifier) / this.cherryModifier) / 100;
  }

  updateValues(event: Object): void {
    console.log(this.cherriesCost);
    let form: HTMLCollection = (<any>document.forms)['converterForm'];
    if (event === (<any>form).cherries) {
      console.log('ch');
      this.value = Math.round(100 * this.cherryModifier / this.valueModifier * this.cherries) / 100;
    } else {
      console.log('val', this.value, this.valueModifier, this.cherryModifier, this.cherriesCost);
      this.cherries = Math.round(100 * (this.value * this.valueModifier) / this.cherryModifier) / 100;
    }
  }
}
