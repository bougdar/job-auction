import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:get/get.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Home', style: TextStyle(fontSize: 20.sp))),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Get.back(); // Go back to Login
          },
          child: Text('Logout', style: TextStyle(fontSize: 18.sp)),
        ),
      ),
    );
  }
}
