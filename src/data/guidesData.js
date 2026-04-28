export const guidesData = [
  {
    slug: "fix-driver-not-installed",
    title: "How to Fix Driver Not Installed Error",
    desc: "A complete step-by-step guide to identifying and installing missing drivers on your Windows system.",
    img: "/guide/guide-driver-not-installed.png",
    content: {
      introduction: "The 'Driver Not Installed' error is one of the most common issues Windows users face when connecting new hardware. Without the correct driver, your operating system cannot communicate with the device.",
      reasons: [
        "Windows Update failed to find a compatible driver automatically.",
        "The driver was never installed for the new hardware.",
        "A previous installation was interrupted or corrupted.",
        "The hardware is too old or too new for the current OS version."
      ],
      steps: [
        {
          title: "Identify the Hardware in Device Manager",
          text: "Open Device Manager (Right-click Start > Device Manager). Look for any device with a yellow exclamation mark under 'Other devices'."
        },
        {
          title: "Check for Windows Updates",
          text: "Go to Settings > Update & Security > Windows Update. Click 'Check for updates'. Often, Windows finds missing drivers in 'Optional updates'."
        },
        {
          title: "Download from Manufacturer Website",
          text: "Find the model number of your device. Go to the manufacturer's official support website (e.g., HP, Dell, NVIDIA) and search for the latest drivers."
        },
        {
          title: "Manual Installation",
          text: "If you have the driver file, right-click the device in Device Manager, select 'Update driver', and choose 'Browse my computer for drivers'."
        }
      ]
    }
  },
  {
    slug: "fix-printer-driver-issues",
    title: "Resolving Common Printer Driver Problems",
    desc: "Is your printer not responding? Follow this guide to fix driver conflicts and connectivity issues.",
    img: "/guide/guide-printer-driver.png",
    content: {
      introduction: "Printer driver issues can manifest as 'Printer Offline' status, partial printing, or a total lack of response from the device despite being connected.",
      reasons: [
        "Outdated printer software causing compatibility lags.",
        "Corrupted print spooler service files.",
        "Multiple driver versions causing conflicts.",
        "IP address mismatch for network printers."
      ],
      steps: [
        {
          title: "Clear the Print Spooler",
          text: "Press Win+R, type 'services.msc'. Find 'Print Spooler', right-click and Stop it. Clear C:\\Windows\\System32\\spool\\PRINTERS and then Start the service again."
        },
        {
          title: "Remove and Re-add the Printer",
          text: "Go to Control Panel > Devices and Printers. Remove the problematic printer. Disconnect the USB cable or restart your router for Wi-Fi printers."
        },
        {
          title: "Install Full Software Package",
          text: "Instead of basic drivers, download the 'Full Feature Software' from the printer manufacturer's site to ensure all protocols are covered."
        }
      ]
    }
  },
  {
    slug: "fix-audio-driver-problems",
    title: "Troubleshooting Audio and Sound Driver Issues",
    desc: "Fix 'No Audio Output Device is installed' and other sound-related errors on your PC.",
    img: "/guide/guide-audio-driver.png",
    content: {
      introduction: "Audio problems can range from a complete lack of sound to crackling noise or low volume levels. Most are software-driven.",
      reasons: [
        "Audio services disabled in Windows.",
        "Incorrect playback device selected in settings.",
        "Realtek or other audio driver corruption.",
        "Windows Update overwriting working audio drivers."
      ],
      steps: [
        {
          title: "Check Default Playback Device",
          text: "Right-click the speaker icon in the taskbar and select 'Open Sound settings'. Ensure the correct device is selected under 'Output'."
        },
        {
          title: "Run the Audio Troubleshooter",
          text: "Windows has a built-in tool. Go to Settings > Update & Security > Troubleshoot > Additional troubleshooters > Playing Audio."
        },
        {
          title: "Roll Back Driver",
          text: "If sound stopped after an update, go to Device Manager > Sound controllers > Properties > Driver tab > Roll Back Driver."
        }
      ]
    }
  },
  {
    slug: "fix-wifi-network-issues",
    title: "How to Fix WiFi and Network Connection Problems",
    desc: "Step-by-step guide to repairing wireless adapter drivers and restoring network connectivity.",
    img: "/guide/guide-network-driver.png",
    content: {
      introduction: "Network issues are critical. A corrupted Wi-Fi driver can prevent you from downloading the fix itself, often requiring a second device.",
      reasons: [
        "Power Management settings turning off the Wi-Fi card.",
        "Outdated drivers incompatible with new router security protocols (WPA3).",
        "TCP/IP stack corruption.",
        "DNS settings conflict."
      ],
      steps: [
        {
          title: "Reset Network Stack",
          text: "Open Command Prompt as Admin. Type: 'netsh winsock reset' and 'netsh int ip reset'. Restart your computer."
        },
        {
          title: "Update Wireless Adapter Driver",
          text: "In Device Manager, right-click your Wi-Fi adapter > Update driver > Search automatically. If that fails, use a USB to download the driver from another PC."
        },
        {
          title: "Adjust Power Settings",
          text: "In Device Manager, go to Network Adapter Properties > Power Management. Uncheck 'Allow the computer to turn off this device to save power'."
        }
      ]
    }
  },
  {
    slug: "fix-usb-driver-issues",
    title: "Fixing 'USB Device Not Recognized' Errors",
    desc: "Solve USB 3.0/3.1 port recognition issues and driver malfunctions for your external devices.",
    img: "/guide/guide-usb-driver.png",
    content: {
      introduction: "USB errors are frustrating because they often involve the motherboard's chipset drivers or power delivery systems.",
      reasons: [
        "USB Selective Suspend setting is enabled.",
        "Generic USB Hub drivers are corrupted.",
        "Chipset drivers are outdated.",
        "The USB device requires a proprietary driver."
      ],
      steps: [
        {
          title: "Uninstall USB Root Hubs",
          text: "In Device Manager, expand 'Universal Serial Bus controllers'. Right-click each 'USB Root Hub' and Uninstall. Restart to let Windows reinstall them."
        },
        {
          title: "Disable USB Selective Suspend",
          text: "Go to Power Options > Change plan settings > Advanced power settings > USB settings. Set 'USB selective suspend setting' to Disabled."
        },
        {
          title: "Check for Chipset Updates",
          text: "Visit your motherboard manufacturer's site to download the latest Intel or AMD Chipset Driver package."
        }
      ]
    }
  },
  {
    slug: "fix-graphics-driver-issues",
    title: "Optimizing and Fixing Graphics Driver Problems",
    desc: "Fix screen flickering, low FPS, and display errors by properly managing your GPU drivers.",
    img: "/guide/guide-graphics-driver.png",
    content: {
      introduction: "Graphics drivers control everything you see. Outdated GPU software can cause crashes in games and visual artifacts in apps.",
      reasons: [
        "Incomplete installation of NVIDIA/AMD/Intel software.",
        "Conflicting drivers from a previous GPU upgrade.",
        "Overheating causing driver resets.",
        "High-resolution display protocols not supported by old drivers."
      ],
      steps: [
        {
          title: "Use DDU (Display Driver Uninstaller)",
          text: "For a clean slate, use DDU in Safe Mode to completely remove all traces of old graphics drivers before installing new ones."
        },
        {
          title: "Download Official Control Centers",
          text: "Always use GeForce Experience for NVIDIA or Adrenalin for AMD to keep your drivers updated automatically."
        },
        {
          title: "Check Display Cable and Port",
          text: "Sometimes a driver error is triggered by a faulty HDMI or DisplayPort cable. Try a different port if possible."
        }
      ]
    }
  }
];
