# -*- coding: utf-8 -*-
#################################################################################
# Author      : Ashish Hirpara (<www.ashish-hirpara.com>)
# Copyright(c): 2021
# All Rights Reserved.
#
# This module is copyright property of the author mentioned above.
# You can`t redistribute it and/or modify it.
#
#################################################################################
{
    'name':'Check Website Responsiveness on Multiple Devices',
    'version':'14.0.0.1',
    'summary':'Check your website on multiple devices within the odoo. Check if your website fits and adapts to mobile, tablet, and desktop screen sizes.',
    'author':'Ashish Hirpara',
    'license':'OPL-1',
    'sequence':10,
    'website':'https://ashish-hirpara.com',
    'category': 'Website/Website',

    'description':'''Website Responsive Testing Tool is designed to test responsive websites on different device resolutions. ,
    Test how responsive your website design is with this app. Check if your website fits and adapts to mobile, tablet, and desktop screen sizes. ,
	Responsive Design Checker, odoo Responsive Design, Responsive,odoo Web Design, optimized,
    website responsive tester,odoo Responsive web design testing, odoo responsive tester, responsive testing tool, responsive, testing tool, responsive design testing tool, viewport resizer, device simulation tool, resolution tester, responsive screen tester, responsive screen tester, responsive screen tester, screen check, resolution tester, screen tester, odoo website tester 
    ''',

    'depends':['website'],

    'data':[
        'templates/assets.xml',
        'templates/template.xml',
    ],

    'price': 0.00,
    'currency': 'USD',

    'application': True,
    'installable': True,
    'auto_install': False,
    'live_test_url': 'http://bit.ly/res-odoo',

    'images': ['static/description/banner.gif'],

}
