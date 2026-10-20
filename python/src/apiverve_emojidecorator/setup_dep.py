from setuptools import setup, find_packages

setup(
    name='apiverve_emojidecorator',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Emoji Decorator inserts relevant emojis into plain text strings. Submit any sentence or passage to receive the complete string decorated with fitting emojis.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/emojidecorator?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
