import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:get/get.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Center(
            child: Column(
              children: [
                SizedBox(height: 36.25.h),
                Container(
                  width: 64.w,
                  height: 64.h,
                  child: Image.asset('lib/assets/logo.png'),
                ),
                SizedBox(height: 35.h),
                SizedBox(
                  width: 217.12.w,
                  height: 36.h,
                  child: Text(
                    'Welcome Back!',
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
                SizedBox(
                  width: 263.35.w,
                  height: 20.h,
                  child: Text(
                    'Log in to your account to continue.',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: const Color(0xFF888888),
                      fontSize: 16,
                      fontFamily: 'Inter',
                      fontWeight: FontWeight.w400,
                      height: 1.50,
                    ),
                  ),
                ),
                SizedBox(height: 35.h),
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
                          border: Border.all(width: 1.w, color: Color(0xFFD1D5DB)),
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
                          border: Border.all(width: 1, color: Color(0xFFD1D5DB)),
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
                Padding(
                  padding: const EdgeInsets.only(right: 15),
                  child: Align(
                    alignment: Alignment.centerRight,
                    child: Text(
                      'Forgot Password?',
                      style: TextStyle(
                        color: Color(0xFFEC7F13),
                        fontSize: 14,
                        fontFamily: 'Inter',
                        fontWeight: FontWeight.w500,
                        decoration: TextDecoration.underline,
                        decorationColor: Color(0xFFEC7F13),
                        decorationThickness: 1.5,
                        height: 1.50,
                      ),
                    ),
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
                        color: Color(0x0C000000),
                        blurRadius: 2,
                        offset: Offset(0, 1),
                        spreadRadius: 0,
                      ),
                    ],
                  ),
                  child: Stack(
                    children: [
                      Positioned(
                        left: 157.36.w,
                        top: 14.h,
                        child: SizedBox(
                          width: 43.60.w,
                          height: 20.h,
                          child: Text(
                            'Login',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 16,
                              fontFamily: 'Inter',
                              fontWeight: FontWeight.w700,
                              height: 1.50,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 32.h),
                Row(
                  children: [
                    Expanded(child: Container(height: 1, color: Color(0xFFE5E7EB))),
                    SizedBox(width: 10), // space between line and text
                    Text(
                      'OR',
                      style: TextStyle(
                        color: Color(0xFF888888),
                        fontSize: 14,
                        fontFamily: 'Inter',
                        fontWeight: FontWeight.w500,
                        height: 1.50,
                      ),
                    ),
                    SizedBox(width: 10), // space between text and line
                    Expanded(child: Container(height: 1, color: Color(0xFFE5E7EB))),
                  ],
                ),
                SizedBox(height: 32.h),
                Container(
                  width: 358.w,
                  height: 48.h,
                  decoration: ShapeDecoration(
                    color: const Color(0xFFF8F7F6),
                    shape: RoundedRectangleBorder(
                      side: BorderSide(width: 1, color: const Color(0xFFD1D5DB)),
                      borderRadius: BorderRadius.circular(8),
                    ),
                    shadows: [
                      BoxShadow(
                        color: Color(0x0C000000),
                        blurRadius: 2,
                        offset: Offset(0, 1),
                        spreadRadius: 0,
                      ),
                    ],
                  ),
                  child: Stack(
                    children: [
                      Positioned(
                        left: 80.64.w,
                        top: 14.h,
                        child: Container(
                          width: 20.w,
                          height: 20.h,
                          clipBehavior: Clip.antiAlias,
                          decoration: BoxDecoration(),
                        ),
                      ),
                      Positioned(
                        left: 112.64.w,
                        top: 12.h,
                        child: SizedBox(
                          width: 165.41.w,
                          height: 24.h,
                          child: Text(
                            'Continue with Google',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              color: const Color(0xFF333333),
                              fontSize: 16,
                              fontFamily: 'Inter',
                              fontWeight: FontWeight.w500,
                              height: 1.50,
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
                  height: 48.h,
                  decoration: ShapeDecoration(
                    color: const Color(0xFFF8F7F6),
                    shape: RoundedRectangleBorder(
                      side: BorderSide(width: 1, color: const Color(0xFFD1D5DB)),
                      borderRadius: BorderRadius.circular(8),
                    ),
                    shadows: [
                      BoxShadow(
                        color: Color(0x0C000000),
                        blurRadius: 2,
                        offset: Offset(0, 1),
                        spreadRadius: 0,
                      ),
                    ],
                  ),
                  child: Stack(
                    children: [
                      Positioned(
                        left: 80.64.w,
                        top: 14.h,
                        child: Container(
                          width: 20.w,
                          height: 20.h,
                          clipBehavior: Clip.antiAlias,
                          decoration: BoxDecoration(),
                        ),
                      ),
                      Positioned(
                        left: 112.64.w,
                        top: 12.h,
                        child: Text(
                          'Continue with Facebook',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: const Color(0xFF333333),
                            fontSize: 16,
                            fontFamily: 'Inter',
                            fontWeight: FontWeight.w500,
                            height: 1.50,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 33.h),
                SizedBox(
                  height: 17.h,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        "Already have an account? ",
                        style: TextStyle(
                          color: const Color(0xFF888888),
                          fontSize: 14,
                          fontFamily: 'Inter',
                          fontWeight: FontWeight.w400,
                          height: 1.43,
                        ),
                      ),
                      GestureDetector(
                        onTap: () {
                          Get.toNamed('/registerpage');
                        },
                        child: Text(
                          "Sign Up",
                          style: TextStyle(
                            color: const Color(0xFFEC7F13),
                            fontSize: 14,
                            fontFamily: 'Inter',
                            fontWeight: FontWeight.w700,
                            decoration: TextDecoration.underline,
                            decorationColor: Color(0xFFEC7F13),
                            height: 1.43,
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
