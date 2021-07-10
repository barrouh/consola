import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ViewPeriod } from 'calendar-utils';
import {
  CalendarDayViewBeforeRenderEvent,
  CalendarEvent,
  CalendarMonthViewBeforeRenderEvent,
  CalendarView,
CalendarWeekViewBeforeRenderEvent,
} from 'angular-calendar';

import RRule from 'rrule';
import moment from 'moment-timezone';

interface RecurringEvent {
  title: string;
  color: any;
  rrule?: {
    freq: any;
    bymonth?: number;
    bymonthday?: number;
    byweekday?: any;
  };
}

moment.tz.setDefault('Utc');

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
  }

  public red: string = "#ad2121";
  public blue: string = "#1e90ff";

  iew: CalendarView = CalendarView.Month;

  viewDate = moment().toDate();

  recurringEvents: RecurringEvent[] = [
    {
      title: 'Recurs on the 5th of each month',
      color: this.red,
      rrule: {
        freq: RRule.MONTHLY,
        bymonthday: 5,
      },
    },
    {
      title: 'Recurs yearly on the 10th of the current month',
      color: this.red,
      rrule: {
        freq: RRule.YEARLY,
        bymonth: moment().month() + 1,
        bymonthday: 10,
      },
    },
    {
      title: 'Recurs weekly on mondays',
      color: this.red,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.MO],
      },
    },
  ];

  calendarEvents: CalendarEvent[] = [];

  viewPeriod: ViewPeriod;

  updateCalendarEvents(
    viewRender:
      | CalendarMonthViewBeforeRenderEvent
      | CalendarWeekViewBeforeRenderEvent
      | CalendarDayViewBeforeRenderEvent
  ): void {
    if (
      !this.viewPeriod ||
      !moment(this.viewPeriod.start).isSame(viewRender.period.start) ||
      !moment(this.viewPeriod.end).isSame(viewRender.period.end)
    ) {
      this.viewPeriod = viewRender.period;
      this.calendarEvents = [];

      this.recurringEvents.forEach((event) => {
        const rule: RRule = new RRule({
          ...event.rrule,
          dtstart: moment(viewRender.period.start).startOf('day').toDate(),
          until: moment(viewRender.period.end).endOf('day').toDate(),
        });
        const { title, color } = event;

        rule.all().forEach((date) => {
          this.calendarEvents.push({
            title,
            color,
            start: moment(date).toDate(),
          });
        });
      });
      this.cdr.detectChanges();
    }
  }

}
