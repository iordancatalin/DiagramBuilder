import {Observable, of} from 'rxjs/index';import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/internal/operators';import {DEBOUNCE_TIME} from '../../../constants/constants';import {AbstractCheckConstraint} from '../../../model-abstract/check-constraint/abstract-check-constraint';import {compareHtmlCheckConstraints} from '../../../ui/comparator-util';import {CheckConstraint} from '../../db/check-constraint/check-constraint';export class HtmlCheckConstraint extends AbstractCheckConstraint {  private _extraConstraint = false;  public constructor(id: string, private _tableId: string, private _diagramId: string) {    super(id);  }  public build(): CheckConstraint {    const constraint: CheckConstraint = new CheckConstraint(this.id);    constraint.name = this.name;    constraint.expression = this.expression;    return constraint;  }  get extraConstraint(): boolean {    return this._extraConstraint;  }  set extraConstraint(value: boolean) {    this._extraConstraint = value;    this.emit();  }  get tableId(): string {    return this._tableId;  }  set tableId(value: string) {    this._tableId = value;  }  get diagramId(): string {    return this._diagramId;  }  set diagramId(value: string) {    this._diagramId = value;  }  get subject$(): Observable<HtmlCheckConstraint> {    return this._subject$.pipe    (      debounceTime(DEBOUNCE_TIME),      distinctUntilChanged(compareHtmlCheckConstraints),      switchMap(value => of(value))    );  }}