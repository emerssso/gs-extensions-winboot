This Gnome Shell extension is intended to add main dropdown menu option to immediately reboot to a 
Windows 7 install on sda1.

Note that this is a first release and makes several strong assumptions about the setup of your system.  Further,
I've only tested this on my personal machine using Fedora 18.  It seems likely that it would work with other systems,
but your milleage may vary.

ASSUMPTIONS:
* That you are using GRUB 2 for your bootloader and that the grub2-reboot command is available in command line.
* That your Windows install is referred to as 'Windows 7 (loader) (on /dev/sda1)' by GRUB 2.

If, for instance, you are using a machine dual-booted on Windows 8, this extension will require modification before
first use.

INSTALLATION: Simply place the 'winboot@cgkasten.email.wm.edu' directory in your Gnome Shell extensions directory
(typically ~/.local/share/gnome-shell/extensions), and enable at http://extensions.gnome.org or with gnome-tweak-tool)

For questions/comments/bugs/concerns, use the [Github issue tracker](https://github.com/emerssso/gs-extensions-winboot/issues)
or contact me at cgkasten at email dot wm dot edu 

FUTURE ROADMAP:
Some features I'd like to add in down the line:
* Automatic detection of boot options
* (Dropdown) List of all boot options to select reboot default from
* Integrate into 'Power Off' menu


