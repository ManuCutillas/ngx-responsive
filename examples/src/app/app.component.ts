import { Component } from '@angular/core';
import {
  IeInfoRx, ResponsiveSizeInfoRx, OrientationInfoRx, DeviceStandardInfoRx, DeviceInfoRx,
  UserAgentInfoRx, BrowserInfoRx
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
    public ieInfoRx: IeInfoRx,
    public browserInfoRx: BrowserInfoRx,
    public devicesInfoRx: DeviceInfoRx,
    public devicesStandardInfoRx: DeviceStandardInfoRx,
    public orientationInfoRx: OrientationInfoRx,
    public responsiveSizeInfoRx: ResponsiveSizeInfoRx,
    public userAgentInfoRx: UserAgentInfoRx
  ) {}
  public title = 'Hello NGX-RESPONSIVE';
  public ngOnInit(): void {
    this._subscribe();
    this.ieInfoRx.connect();
    this.browserInfoRx.connect();
    this.devicesInfoRx.connect();
    this.devicesStandardInfoRx.connect();
    this.orientationInfoRx.connect();
    this.responsiveSizeInfoRx.connect();
    this.userAgentInfoRx.connect();
  }
  public ngOnDestroy(): void {
    this._unsubscribe();
    this.ieInfoRx.disconnect();
    this.browserInfoRx.disconnect();
    this.devicesInfoRx.disconnect();
    this.devicesStandardInfoRx.disconnect();
    this.orientationInfoRx.disconnect();
    this.responsiveSizeInfoRx.disconnect();
    this.userAgentInfoRx.disconnect();
  }
  public thisUserAgent(userAgent) {
    console.log('userAgent ==========>', userAgent);
  }
  private _subscribe(): void {
    this._subscriptions.push(
      this.ieInfoRx.getIE.subscribe((data) => {
        console.log('this.ieInfoRx.getIE ===>', data);
      }, (err) => {
        console.log('Error', err);
      })
    );
    this._subscriptions.push(
      this.browserInfoRx.getBrowser.subscribe((data) => {
        console.log('this.browserInfoRx.getBrowser ===>', data);
      }, (err) => {
        console.log('Error', err);
      })
    );
    this._subscriptions.push(
      this.devicesInfoRx.getDevice.subscribe((data) => {
        console.log('this.devicesInfoRx.getDevice ===>', data);
      }, (err) => {
        console.log('Error', err);
      })
    );
    this._subscriptions.push(
      this.devicesStandardInfoRx.getStandardDevice.subscribe((data) => {
        console.log('this.devicesStandardInfoRx.subject$ ===>', data);
      }, (err) => {
        console.log('Error', err);
      })
    );
    this._subscriptions.push(
      this.orientationInfoRx.getOrientation.subscribe((data) => {
        console.log('this.orientationInfoRx.getOrientation ===>', data);
      }, (err) => {
        console.log('Error', err);
      })
    );
    this._subscriptions.push(
      this.responsiveSizeInfoRx.getResponsiveSize.subscribe((data) => {
        console.log('this.responsiveSizeInfoRx.getResponsiveSize ===>', data);
      }, (err) => {
        console.log('Error', err);
      })
    );
    this._subscriptions.push(
      this.userAgentInfoRx.getUserAgent.subscribe((data) => {
        console.log('this.userAgentInfoRx.getUserAgent ===>', data);
      }, (err) => {
        console.log('Error', err);
      })
    );
  }
  private _unsubscribe(): void {
      this._subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
