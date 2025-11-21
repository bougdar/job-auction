import 'package:auction_job/pages/auth/login_page.dart';
import 'package:auction_job/pages/auth/register_page.dart';
import 'package:get/get.dart';

import '../pages/welcome_page.dart';

class AppRoutes {
  static const welcome = '/welcome';
  static const loginpage = '/loginpage';
  static const registerpage = '/registerpage';
  static final pages = [
    GetPage(name: welcome, page: () => const WelcomePage()),
    GetPage(name: loginpage, page: () => const LoginPage()),
    GetPage(name: registerpage, page: () => const RegisterPage()),
  ];
}
