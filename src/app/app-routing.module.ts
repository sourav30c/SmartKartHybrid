import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', //(localStorage.getItem('loginDataKKart') != null) ? 'home' : 'login', //'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'wishlist', loadChildren: './wishlist/wishlist.module#WishlistPageModule' },
  { path: 'forgotpassword', loadChildren: './forgotpassword/forgotpassword.module#ForgotpasswordPageModule' },
  { path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordPageModule' },
  { path: 'my-account-details', loadChildren: './my-account-details/my-account-details.module#MyAccountDetailsPageModule' },
  { path: 'add-address', loadChildren: './add-address/add-address.module#AddAddressPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'billing-address', loadChildren: './billing-address/billing-address.module#BillingAddressPageModule' },
  { path: 'add-billing-address', loadChildren: './add-billing-address/add-billing-address.module#AddBillingAddressPageModule' },
  { path: 'top-selling-product-list', loadChildren: './top-selling-product-list/top-selling-product-list.module#TopSellingProductListPageModule' },
  { path: 'product-category', loadChildren: './product-category/product-category.module#ProductCategoryPageModule' },
  { path: 'product-sub-category', loadChildren: './product-sub-category/product-sub-category.module#ProductSubCategoryPageModule' },
  { path: 'review-list', loadChildren: './review-list/review-list.module#ReviewListPageModule' },
  { path: 'add-your-review', loadChildren: './add-your-review/add-your-review.module#AddYourReviewPageModule' },
  { path: 'order-list', loadChildren: './order-list/order-list.module#OrderListPageModule' },
  { path: 'order-details', loadChildren: './order-details/order-details.module#OrderDetailsPageModule' },
  { path: 'return-details', loadChildren: './return-details/return-details.module#ReturnDetailsPageModule' },
  { path: 'thank-you', loadChildren: './thank-you/thank-you.module#ThankYouPageModule' },
  { path: 'order-tracking', loadChildren: './order-tracking/order-tracking.module#OrderTrackingPageModule' },
  { path: 'payment-mode', loadChildren: './payment-mode/payment-mode.module#PaymentModePageModule' },
  { path: 'terms-service', loadChildren: './terms-service/terms-service.module#TermsServicePageModule' },
  { path: 'privacy-policy', loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyPageModule' },
  { path: 'otp-registration', loadChildren: './otp-registration/otp-registration.module#OtpRegistrationPageModule' },
  { path: 'my-reviews', loadChildren: './my-reviews/my-reviews.module#MyReviewsPageModule' },
  { path: 'auto-search', loadChildren: './auto-search/auto-search.module#AutoSearchPageModule' },
  { path: 'otp-fp-submit', loadChildren: './otp-fp-submit/otp-fp-submit.module#OtpFpSubmitPageModule' },
  { path: 'return-policy', loadChildren: './return-policy/return-policy.module#ReturnPolicyPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
