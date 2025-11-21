import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class WelcomePage extends StatelessWidget {
  const WelcomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SizedBox(height: 283.h),
            SizedBox(
              width: 282.15.w,
              height: 69.h,
              child: Text(
                'Your Next Great Find Awaits.',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: Color(0xFF1B140D),
                  fontSize: 28,
                  fontFamily: 'Inter',
                  fontWeight: FontWeight.w700,
                  height: 1.25,
                ),
              ),
            ),

            SizedBox(height: 250.h),

            Container(
              width: 358.w,
              height: 56.h,
              decoration: BoxDecoration(
                color: Color(0xFFEC7F13),
                borderRadius: BorderRadius.circular(12),
                boxShadow: const [
                  BoxShadow(
                    color: Color(0x4CEC7F13),
                    blurRadius: 6,
                    offset: Offset(0, 4),
                    spreadRadius: -4,
                  ),
                  BoxShadow(
                    color: Color(0x4CEC7F13),
                    blurRadius: 15,
                    offset: Offset(0, 10),
                    spreadRadius: -3,
                  ),
                ],
              ),
              child: Center(
                child: Text(
                  'Get Started',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 18,
                    fontFamily: 'Inter',
                    fontWeight: FontWeight.w700,
                    letterSpacing: 0.27,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
