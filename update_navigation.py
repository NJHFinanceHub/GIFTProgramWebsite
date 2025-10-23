"""
Script to update navigation across all HTML files
This ensures consistent navigation on every page
"""

import os
import re

# Standard navigation HTML (desktop)
DESKTOP_NAV = '''                <!-- Desktop Navigation -->
                <div id="nav-menu" class="hidden md:flex items-center space-x-6">
                    <a href="index.html" class="nav-link text-white font-medium">Home</a>
                    <a href="why-sweet-potatoes.html" class="nav-link text-white font-medium">Why Sweet Potatoes?</a>
                    <a href="our-approach.html" class="nav-link text-white font-medium">Our Approach</a>

                    <!-- Our Partners Dropdown -->
                    <div class="relative group">
                        <button class="nav-link text-white font-medium flex items-center">
                            Our Partners
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 w-64 z-50">
                            <div class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Haiti</div>
                            <a href="larc-en-ciel-haiti.html" class="block px-4 py-2 text-gray-800 hover:bg-orange-100">Maison L'Arc-en-Ciel</a>
                            <a href="wynne-farm-haiti.html" class="block px-4 py-2 text-gray-800 hover:bg-orange-100">Wynne Farm Ecological Preserve</a>
                            <a href="university-fondwa-haiti.html" class="block px-4 py-2 text-gray-800 hover:bg-orange-100">University of Fondwa</a>
                            <a href="second-mile-haiti.html" class="block px-4 py-2 text-gray-800 hover:bg-orange-100">Second Mile Haiti</a>
                            <a href="sfa-haiti.html" class="block px-4 py-2 text-gray-800 hover:bg-orange-100">Smallholder Farmers Alliance</a>
                            <div class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase mt-2">Malawi</div>
                            <a href="daughters-of-wisdom-malawi.html" class="block px-4 py-2 text-gray-800 hover:bg-orange-100">Daughters of Wisdom</a>
                            <div class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase mt-2">Philippines</div>
                            <a href="ecogenesis-philippines.html" class="block px-4 py-2 text-gray-800 hover:bg-orange-100">Ecogenesis</a>
                        </div>
                    </div>

                    <!-- Projects Dropdown -->
                    <div class="relative group">
                        <button class="nav-link text-white font-medium flex items-center">
                            Projects
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 w-64 z-50">
                            <a href="project-sweet-potato.html" class="block px-4 py-2 text-gray-800 hover:bg-orange-100">Sweet Potato Smart Farming</a>
                            <a href="project-spiritual-ministry.html" class="block px-4 py-2 text-gray-800 hover:bg-orange-100">Spiritual Ministry</a>
                            <a href="project-vocational-training.html" class="block px-4 py-2 text-gray-800 hover:bg-orange-100">Vocational Training</a>
                            <a href="project-solar-energy.html" class="block px-4 py-2 text-gray-800 hover:bg-orange-100">Solar Energy Projects</a>
                            <a href="project-rabbit-farming.html" class="block px-4 py-2 text-gray-800 hover:bg-orange-100">Rabbit Farming</a>
                        </div>
                    </div>

                    <a href="resources.html" class="nav-link text-white font-medium">Resources</a>
                    <a href="impact.html" class="nav-link text-white font-medium">Impact</a>
                    <a href="get-involved.html" class="btn-secondary">Get Involved</a>
                </div>'''

# Get all HTML files
html_files = [f for f in os.listdir('.') if f.endswith('.html') and f != 'NAVIGATION-TEMPLATE.html']

print(f"Found {len(html_files)} HTML files to update")
print("Files:", html_files)
print("\nRun this script with Python to update all navigation menus.")
print("Command: python update_navigation.py")
