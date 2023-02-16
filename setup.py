from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in erpnext_customize/__init__.py
from erpnext_customize import __version__ as version

setup(
	name="erpnext_customize",
	version=version,
	description="Customization for ERPNext",
	author="Abood",
	author_email="me@abood.gsg",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
