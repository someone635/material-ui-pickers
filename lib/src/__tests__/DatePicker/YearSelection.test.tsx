import * as React from 'react';
import Year from '../../views/Year/Year';
import { ReactWrapper } from 'enzyme';
import { mount, utilsToUse } from '../test-utils';
import { YearSelection, YearSelectionProps } from '../../views/Year/YearView';

describe('YearSelection', () => {
  let component: ReactWrapper<YearSelectionProps>;

  beforeEach(() => {
    component = mount(
      <YearSelection
        minDate={new Date('03-01-2014')}
        maxDate={new Date('05-01-2018')}
        date={utilsToUse.date('04-01-2017')}
        onChange={jest.fn()}
      />
    );
  });

  it('Should render 5 enabled years', () => {
    expect(component.find(Year).map(year => year.prop('disabled'))).toEqual([
      false,
      false,
      false,
      false,
      false,
    ]);
  });
});

describe('YearSelection with shouldDisableYear', () => {
  let component: ReactWrapper<YearSelectionProps>;

  beforeEach(() => {
    component = mount(
      <YearSelection
        minDate={new Date('03-01-2014')}
        maxDate={new Date('05-01-2018')}
        date={utilsToUse.date('04-01-2017')}
        onChange={jest.fn()}
        shouldDisableYear={year => {
          return year === 2015;
        }}
      />
    );
  });

  it('Should disable given year', () => {
    expect(component.find(Year).map(year => year.prop('disabled'))).toEqual([
      false,
      true,
      false,
      false,
      false,
    ]);
  });
});
