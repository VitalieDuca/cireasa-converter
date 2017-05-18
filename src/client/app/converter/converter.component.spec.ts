import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { ConverterModule } from './converter.module';
import { ConverterComponent } from './converter.component';

export function main() {
   describe('About component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, ConverterComponent],
        imports: [FormsModule, ConverterModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let converterDOMEl = fixture.debugElement.children[0].nativeElement;

              expect(converterDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-converter></sd-converter>'
})
class TestComponent {}
