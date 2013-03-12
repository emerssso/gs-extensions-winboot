
const St = imports.gi.St;
const Main = imports.ui.main;
const Lang = imports.lang;
const Shell = imports.gi.Shell;
const GLib = imports.gi.GLib;
const PopupMenu = imports.ui.popupMenu;
const Util = imports.misc.util;
const PolkitAgent = imports.ui.components.polkitAgent;

let item, userMenu;

function _onAdvancedSettingsActivate() {
    Main.overview.hide();
    Util.spawnCommandLine("pkexec grub2-reboot 'Windows 7 (loader) (on /dev/sda1)'");
    Util.spawnCommandLine("reboot");
}

function init(extensionMeta) {
    userMenu = Main.panel.statusArea.userMenu.menu;
}

function enable() {
    item = new PopupMenu.PopupMenuItem(_("Boot Windows"));
    item.connect('activate', Lang.bind(item, _onAdvancedSettingsActivate));
    userMenu.addMenuItem(item, 10);
}

function disable() {
    if (item) {
        item.destroy();
    }
}
