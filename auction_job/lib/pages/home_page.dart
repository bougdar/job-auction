import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:get/get.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(40.h),
        child: SafeArea(
          bottom: false,
          child: Container(
            padding: EdgeInsets.symmetric(horizontal: 16.w),
            decoration: const BoxDecoration(
              color: Colors.white,
              border: Border(
                bottom: BorderSide(width: 1, color: Color(0xFFE5E7EB)),
              ),
            ),
            height: 40.h,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'BidNow',
                  style: TextStyle(
                    color: const Color(0xFF212121),
                    fontSize: 20.sp,
                    fontFamily: 'Inter',
                    fontWeight: FontWeight.w700,
                    height: 1.25,
                    letterSpacing: -0.30,
                  ),
                ),
                Container(
                  width: 40.w,
                  height: 40.w,
                  clipBehavior: Clip.antiAlias,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(9999.r),
                  ),
                  child: Icon(Icons.person, size: 28.sp),
                ),
              ],
            ),
          ),
        ),
      ),

      body: SafeArea(
        child: SingleChildScrollView(
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 16.w),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              
              children: [
                SizedBox(height: 11.h,),
                SizedBox(
                  width: 192.66.w,
                  height: 26.h,
                  child: Text(
                    'Featured Auctions',
                    style: TextStyle(
                      color: const Color(0xFF212121),
                      fontSize: 22,
                      fontFamily: 'Inter',
                      fontWeight: FontWeight.w700,
                      height: 1.25,
                      letterSpacing: -0.33,
                    ),
                  ),
                ),
                SizedBox(height: 14.h),

                Container(
                  height: 217.h,
                  clipBehavior: Clip.antiAlias,
                  decoration: BoxDecoration(color: Colors.white),
                  child: SingleChildScrollView(
                    scrollDirection: Axis.horizontal,
                    child: Row(
                      children: [
                        Container(
                          width: 256.w,
                          height: 201.h,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Container(
                                width: 256.w,
                                height: 144.h,
                                decoration: BoxDecoration(
                                  color: Colors.grey[300],
                                  borderRadius: BorderRadius.circular(12),
                                ),
                              ),
                              SizedBox(height: 9.h),
                              Text(
                                "Eames Lounge Chair",
                                style: TextStyle(
                                  color: Color(0xFF212121),
                                  fontSize: 16,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                              SizedBox(height: 4.h),
                              Text(
                                "Current Bid: \$2,500",
                                style: TextStyle(
                                  color: Color(0xFF757575),
                                  fontSize: 14,
                                ),
                              ),
                            ],
                          ),
                        ),

                        SizedBox(width: 16.w),
                        Container(
                          width: 256.w,
                          height: 201.h,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Container(
                                width: 256.w,
                                height: 144.h,
                                decoration: BoxDecoration(
                                  color: Colors.grey[300],
                                  borderRadius: BorderRadius.circular(12),
                                ),
                              ),
                              SizedBox(height: 9.h),
                              Text(
                                "Eames Lounge Chair",
                                style: TextStyle(
                                  color: Color(0xFF212121),
                                  fontSize: 16,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                              SizedBox(height: 4.h),
                              Text(
                                "Current Bid: \$2,500",
                                style: TextStyle(
                                  color: Color(0xFF757575),
                                  fontSize: 14,
                                ),
                              ),
                            ],
                          ),
                        ),

                        SizedBox(width: 16.w),
                        Container(
                          width: 256.w,
                          height: 201.h,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Container(
                                width: 256.w,
                                height: 144.h,
                                decoration: BoxDecoration(
                                  color: Colors.grey[300],
                                  borderRadius: BorderRadius.circular(12),
                                ),
                              ),
                              SizedBox(height: 9.h),
                              Text(
                                "Eames Lounge Chair",
                                style: TextStyle(
                                  color: Color(0xFF212121),
                                  fontSize: 16,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                              SizedBox(height: 4.h),
                              Text(
                                "Current Bid: \$2,500",
                                style: TextStyle(
                                  color: Color(0xFF757575),
                                  fontSize: 14,
                                ),
                              ),
                            ],
                          ),
                        ),

                        SizedBox(width: 16.w),
                      ],
                    ),
                  ),
                ),
                SizedBox(
                  height: 26.h,
                  child: Text(
                    'Browse by Category',
                    style: TextStyle(
                      color: const Color(0xFF212121),
                      fontSize: 22,
                      fontFamily: 'Inter',
                      fontWeight: FontWeight.w700,
                      height: 1.25,
                      letterSpacing: -0.33,
                    ),
                  ),
                ),
                SizedBox(height: 14.h),

                SizedBox(
                  height: 52.h,
                  child: SingleChildScrollView(
                    scrollDirection: Axis.horizontal,
                    child: Row(
                      children: [
                        Container(
                          width: 134.22.w,
                          height: 40.h,
                          decoration: BoxDecoration(
                            color: Color(0xFFF3F4F6),
                            borderRadius: BorderRadius.circular(999.r),
                          ),
                          padding: EdgeInsets.symmetric(horizontal: 12.w),
                          child: Row(
                            children: [
                              Icon(
                                Icons.devices,
                                size: 20.w,
                                color: Color(0xFF757575),
                              ),
                              SizedBox(width: 8.w),
                              Text(
                                "Electronics",
                                style: TextStyle(
                                  fontSize: 14.sp,
                                  fontWeight: FontWeight.w500,
                                  color: Color(0xFF212121),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(width: 12.w),

                        Container(
                          width: 134.22.w,
                          height: 40.h,
                          decoration: BoxDecoration(
                            color: Color(0xFFF3F4F6),
                            borderRadius: BorderRadius.circular(999.r),
                          ),
                          padding: EdgeInsets.symmetric(horizontal: 12.w),
                          child: Row(
                            children: [
                              Icon(
                                Icons.devices,
                                size: 20.w,
                                color: Color(0xFF757575),
                              ),
                              SizedBox(width: 8.w),
                              Text(
                                "Electronics",
                                style: TextStyle(
                                  fontSize: 14.sp,
                                  fontWeight: FontWeight.w500,
                                  color: Color(0xFF212121),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(width: 12.w),

                        Container(
                          width: 134.22.w,
                          height: 40.h,
                          decoration: BoxDecoration(
                            color: Color(0xFFF3F4F6),
                            borderRadius: BorderRadius.circular(999.r),
                          ),
                          padding: EdgeInsets.symmetric(horizontal: 12.w),
                          child: Row(
                            children: [
                              Icon(
                                Icons.devices,
                                size: 20.w,
                                color: Color(0xFF757575),
                              ),
                              SizedBox(width: 8.w),
                              Text(
                                "Electronics",
                                style: TextStyle(
                                  fontSize: 14.sp,
                                  fontWeight: FontWeight.w500,
                                  color: Color(0xFF212121),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(width: 12.w),
                      ],
                    ),
                  ),
                ),
                SizedBox(height: 14.h),
                SizedBox(
                  height: 26.h,
                  child: Text(
                    'Ending Soon',
                    style: TextStyle(
                      color: const Color(0xFF212121),
                      fontSize: 22,
                      fontFamily: 'Inter',
                      fontWeight: FontWeight.w700,
                      height: 1.25,
                      letterSpacing: -0.33,
                    ),
                  ),
                ),
                SizedBox(height: 14.h),
                //cards ending soon
                ListView.builder(
                  itemCount: 9,
                  padding: EdgeInsets.zero,
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  itemBuilder: (context, index) {
                    return Container(
                      width: 358.w,
                      height: 122.h,
                      margin: EdgeInsets.only(bottom: 12.h),
                      padding: EdgeInsets.all(13.w),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(12.r),
                        border: Border.all(
                          color: Color(0xFFE5E7EB),
                          width: 1,
                        ),
                      ),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Container(
                            width: 96.w,
                            height: 96.h,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(12.r),
                              color: Colors.grey.shade300,
                            ),
                          ),
                          SizedBox(width: 16.w),
                          Expanded(
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  "Antique Painted Vase",
                                  style: TextStyle(
                                    fontSize: 16.sp,
                                    fontWeight: FontWeight.w600,
                                    color: Color(0xFF212121),
                                  ),
                                ),
                                SizedBox(height: 6.h),
                                Text(
                                  "Current Bid: \$1,100",
                                  style: TextStyle(
                                    fontSize: 14.sp,
                                    fontWeight: FontWeight.w500,
                                    color: Color(0xFFFF7A00),
                                  ),
                                ),
                                SizedBox(height: 6.h),
                                Text(
                                  "5h 5m left",
                                  style: TextStyle(
                                    fontSize: 14.sp,
                                    fontWeight: FontWeight.w400,
                                    color: Color(0xFF757575),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          Icon(
                            Icons.favorite_border,
                            size: 24.w,
                            color: Color(0xFF757575),
                          ),
                        ],
                      ),
                    );
                  },
                ),
                SizedBox(height: 16.h),
              ],
            ),
          ),
        ),
      ),
      bottomNavigationBar: Container(
        width: 390.w,
        height: 80.h,
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border(top: BorderSide(color: Color(0xFFE5E7EB), width: 1)),
        ),
        child: Stack(
          children: [
            /// Home
            Positioned(
              left: 23.19.w,
              top: 18.5.h,
              child: Column(
                children: [
                  Icon(Icons.home, color: Color(0xFFFF7A00), size: 24.w),
                  SizedBox(height: 4.h),
                  Text(
                    "Home",
                    style: TextStyle(
                      color: Color(0xFFFF7A00),
                      fontSize: 12.sp,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ],
              ),
            ),

            /// Categories
            Positioned(
              left: 103.72.w,
              top: 18.5.h,
              child: Column(
                children: [
                  Icon(Icons.grid_view, color: Color(0xFF757575), size: 24.w),
                  SizedBox(height: 4.h),
                  Text(
                    "Categories",
                    style: TextStyle(
                      color: Color(0xFF757575),
                      fontSize: 12.sp,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ],
              ),
            ),

            /// Add Auction
            Positioned(
              left: 212.69.w,
              top: 18.5.h,
              child: Column(
                children: [
                  Icon(
                    Icons.add_circle_outline,
                    color: Color(0xFF757575),
                    size: 24.w,
                  ),
                  SizedBox(height: 4.h),
                  Text(
                    "Add Auction",
                    style: TextStyle(
                      color: Color(0xFF757575),
                      fontSize: 12.sp,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ],
              ),
            ),

            /// Profile
            Positioned(
              left: 329.75.w,
              top: 18.5.h,
              child: Column(
                children: [
                  Icon(
                    Icons.person_outline,
                    color: Color(0xFF757575),
                    size: 24.w,
                  ),
                  SizedBox(height: 4.h),
                  Text(
                    "Profile",
                    style: TextStyle(
                      color: Color(0xFF757575),
                      fontSize: 12.sp,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
