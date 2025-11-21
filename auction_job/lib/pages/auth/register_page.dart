import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:get/get.dart';

class RegisterPage extends StatelessWidget {
  const RegisterPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Center(
            child: Column(
              children: [
                SizedBox(height: 45.h),
                SizedBox(
                  width: 217.12.w,
                  height: 36.h,
                  child: Text(
                    'Welcome !',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: const Color(0xFF333333),
                      fontSize: 30,
                      fontFamily: 'Inter',
                      fontWeight: FontWeight.w700,
                      height: 1.25,
                      letterSpacing: -0.75,
                    ),
                  ),
                ),
                SizedBox(height: 15.h),
                Container(
                  width: 358.w,
                  height: 67.h,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'First Name',
                        style: TextStyle(
                          color: Color(0xFF333333),
                          fontSize: 14,
                          fontFamily: 'Inter',
                          fontWeight: FontWeight.w500,
                          height: 1.50.h,
                        ),
                      ),
                      SizedBox(height: 5.h),
                      Container(
                        width: 358.w,
                        height: 38.h,
                        decoration: BoxDecoration(
                          color: Color(0xFFF8F7F6),
                          border: Border.all(
                            width: 1.w,
                            color: Color(0xFFD1D5DB),
                          ),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: TextField(
                          decoration: InputDecoration(
                            hintText: "Enter your First name",
                            hintStyle: TextStyle(
                              color: Color(0xFF888888),
                              fontSize: 16,
                              fontFamily: 'Inter',
                            ),
                            border: InputBorder.none,
                            contentPadding: EdgeInsets.symmetric(
                              horizontal: 12,
                              vertical: 8,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 15.h),
                Container(
                  width: 358.w,
                  height: 67.h,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Last name',
                        style: TextStyle(
                          color: Color(0xFF333333),
                          fontSize: 14,
                          fontFamily: 'Inter',
                          fontWeight: FontWeight.w500,
                          height: 1.50.h,
                        ),
                      ),
                      SizedBox(height: 5.h),
                      Container(
                        width: 358.w,
                        height: 38.h,
                        decoration: BoxDecoration(
                          color: Color(0xFFF8F7F6),
                          border: Border.all(
                            width: 1.w,
                            color: Color(0xFFD1D5DB),
                          ),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: TextField(
                          decoration: InputDecoration(
                            hintText: "Enter your Lastname",
                            hintStyle: TextStyle(
                              color: Color(0xFF888888),
                              fontSize: 16,
                              fontFamily: 'Inter',
                            ),
                            border: InputBorder.none,
                            contentPadding: EdgeInsets.symmetric(
                              horizontal: 12,
                              vertical: 8,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 15.h),
                // Address input
                Container(
                  width: 358.w,
                  height: 67.h,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Address',
                        style: TextStyle(
                          color: Color(0xFF333333),
                          fontSize: 14,
                          fontFamily: 'Inter',
                          fontWeight: FontWeight.w500,
                          height: 1.50.h,
                        ),
                      ),
                      SizedBox(height: 5.h),
                      Container(
                        width: 358.w,
                        height: 38.h,
                        decoration: BoxDecoration(
                          color: Color(0xFFF8F7F6),
                          border: Border.all(
                            width: 1.w,
                            color: Color(0xFFD1D5DB),
                          ),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: TextField(
                          decoration: InputDecoration(
                            hintText: "Enter your Address",
                            hintStyle: TextStyle(
                              color: Color(0xFF888888),
                              fontSize: 16,
                              fontFamily: 'Inter',
                            ),
                            border: InputBorder.none,
                            contentPadding: EdgeInsets.symmetric(
                              horizontal: 12,
                              vertical: 8,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 15.h),
                // Phone input
                Container(
                  width: 358.w,
                  height: 67.h,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Phone',
                        style: TextStyle(
                          color: Color(0xFF333333),
                          fontSize: 14,
                          fontFamily: 'Inter',
                          fontWeight: FontWeight.w500,
                          height: 1.50.h,
                        ),
                      ),
                      SizedBox(height: 5.h),
                      Container(
                        width: 358.w,
                        height: 38.h,
                        decoration: BoxDecoration(
                          color: Color(0xFFF8F7F6),
                          border: Border.all(
                            width: 1.w,
                            color: Color(0xFFD1D5DB),
                          ),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: TextField(
                          keyboardType: TextInputType.phone,
                          decoration: InputDecoration(
                            hintText: "Enter your Phone",
                            hintStyle: TextStyle(
                              color: Color(0xFF888888),
                              fontSize: 16,
                              fontFamily: 'Inter',
                            ),
                            border: InputBorder.none,
                            contentPadding: EdgeInsets.symmetric(
                              horizontal: 12,
                              vertical: 8,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 15.h),
                Container(
                  width: 358.w,
                  height: 67.h,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Email',
                        style: TextStyle(
                          color: Color(0xFF333333),
                          fontSize: 14,
                          fontFamily: 'Inter',
                          fontWeight: FontWeight.w500,
                          height: 1.50.h,
                        ),
                      ),
                      SizedBox(height: 5.h),
                      Container(
                        width: 358.w,
                        height: 38.h,
                        decoration: BoxDecoration(
                          color: Color(0xFFF8F7F6),
                          border: Border.all(
                            width: 1.w,
                            color: Color(0xFFD1D5DB),
                          ),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: TextField(
                          decoration: InputDecoration(
                            hintText: "Enter your email",
                            hintStyle: TextStyle(
                              color: Color(0xFF888888),
                              fontSize: 16,
                              fontFamily: 'Inter',
                            ),
                            border: InputBorder.none,
                            contentPadding: EdgeInsets.symmetric(
                              horizontal: 12,
                              vertical: 8,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 15.h),
                Container(
                  width: 358.w,
                  height: 77.h,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Password',
                        style: TextStyle(
                          color: Color(0xFF333333),
                          fontSize: 14,
                          fontFamily: 'Inter',
                          fontWeight: FontWeight.w500,
                          height: 1.50,
                        ),
                      ),
                      SizedBox(height: 5),
                      Container(
                        width: 358.w,
                        height: 48.h,
                        decoration: BoxDecoration(
                          color: Color(0xFFF8F7F6),
                          border: Border.all(
                            width: 1,
                            color: Color(0xFFD1D5DB),
                          ),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: TextField(
                          obscureText: true,
                          decoration: InputDecoration(
                            border: InputBorder.none,
                            hintText: 'Enter your password',
                            hintStyle: TextStyle(
                              color: Color(0xFF888888),
                              fontSize: 16,
                              fontFamily: 'Inter',
                            ),
                            contentPadding: EdgeInsets.symmetric(
                              horizontal: 12,
                              vertical: 14,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 26.h),
                Container(
                  width: 358.w,
                  height: 48.h,
                  decoration: ShapeDecoration(
                    color: const Color(0xFFEC7F13),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                    shadows: [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.05),
                        blurRadius: 2,
                        offset: Offset(0, 1),
                        spreadRadius: 0,
                      ),
                    ],
                  ),
                  child: Center(
                    child: Text(
                      'Register',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 16,
                        fontFamily: 'Inter',
                        fontWeight: FontWeight.w700,
                        height: 1.5,
                      ),
                    ),
                  ),
                ),
                SizedBox(height: 32.h),
                SizedBox(
                  width: 212.97.h,
                  height: 17.w,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        "Don't have an account? ",
                        style: TextStyle(
                          color: Color(0xFF888888),
                          fontSize: 14,
                          fontFamily: 'Inter',
                          fontWeight: FontWeight.w400,
                        ),
                      ),
                      GestureDetector(
                        onTap: () {
                          Get.toNamed('/loginpage');
                        },
                        child: Text(
                          "Login",
                          style: TextStyle(
                            color: Color(0xFFEC7F13),
                            fontSize: 14,
                            fontFamily: 'Inter',
                            fontWeight: FontWeight.w700,
                            decoration: TextDecoration.underline,
                            decorationColor: Color(0xFFEC7F13),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
