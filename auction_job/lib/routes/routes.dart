import 'package:get/get.dart';

import '../pages/welcome_page.dart';

class AppRoutes {
  static const welcome = '/welcome';

  static final pages = [
    GetPage(name: welcome, page: () => const WelcomePage()),
  ];
}
