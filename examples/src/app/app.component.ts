import { Component } from '@angular/core';
import {
  IeInfoRx, ResponsiveSizeInfoRx, OrientationInfoRx, DeviceStandardInfoRx, DeviceInfoRx,
  UserAgentInfoRx
} from 'ngx-responsive';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  constructor(
    private ieInfoRx: IeInfoRx,
    private devicesInfoRx: DeviceInfoRx,
    private devicesStandardInfoRx: DeviceStandardInfoRx,
    private orientationInfoRx: OrientationInfoRx,
    private responsiveSizeInfoRx: ResponsiveSizeInfoRx,
    private userAgentInfoRx: UserAgentInfoRx
  ) {

  }
  public ngOnInit(): void {
    this.ieInfoRx.connect();
    this.devicesInfoRx.connect();
    this.devicesStandardInfoRx.connect();
    this.orientationInfoRx.connect();
    this.responsiveSizeInfoRx.connect();
    this.userAgentInfoRx.connect();
  }
  public ngOnDestroy(): void {
    this._unsubscribe();
    this.ieInfoRx.disconnect();
    this.devicesInfoRx.disconnect();
    this.devicesStandardInfoRx.disconnect();
    this.orientationInfoRx.disconnect();
    this.responsiveSizeInfoRx.disconnect();
    this.userAgentInfoRx.disconnect();
  }
  public thisUserAgent(userAgent) {
    console.log(userAgent);
  }
  private _subscribe(): void {
    this._subscriptions.push(
      this.ieInfoRx.getReplaySubjectIEVersion().subscribe((data) => {
        console.log('this.ieInfoRx.getSubjectIEVersion ===>', data);
      }));
    this._subscriptions.push(
      this.devicesInfoRx.getReplaySubjectDeviceInfo().subscribe((data) => {
        console.log('this.devicesInfoRx.getSubjectDeviceInfo ===>', data);
      })
    );
    this._subscriptions.push(
      this.devicesStandardInfoRx.getReplaySubjectStandardDevice().subscribe((data) => {
        console.log('this.devicesStandardInfoRx.getSubjectStandardDevice ===>', data);
      })
    );
    this._subscriptions.push(
      this.orientationInfoRx.getReplaySubjectOrientation().subscribe((data) => {
        console.log('this.orientationInfoRx.getSubjectOrientation ===>', data);
      })
    );
    this._subscriptions.push(
      this.responsiveSizeInfoRx.getReplaySubjectSizeInfo().subscribe((data) => {
        console.log('this.responsiveSizeInfoRx.getSubjectSizeInfo ===>', data);
      })
    );
    this._subscriptions.push(
      this.userAgentInfoRx.getReplaySubjectUserAgent().subscribe((data) => {
        console.log('this.userAgentInfoRx.getSubjectUserAgent ===>', data);
      })
    );
  }
  private _unsubscribe(): void {
      this._subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
