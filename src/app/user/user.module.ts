import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent} from './pages/home/home.component';
import { UserRoutingModule } from './user.routing';
import { CommonDataModule } from '../common/common.module';

@NgModule({
    declarations: [
        HomeComponent,

    ],
    imports: [
        CommonModule,
        CommonDataModule,
        UserRoutingModule,
    ],
    exports: [],
    providers: [
      ],
    entryComponents: []
})
export class UserModule {}
