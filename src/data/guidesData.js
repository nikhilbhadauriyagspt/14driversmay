export const guidesData = [
  {
    slug: "understand-driver-not-installed",
    title: "Understanding Driver Not Installed Errors",
    desc: "A complete step-by-step guide to identifying missing drivers on your Windows system.",
    img: "/guide/guide-driver-not-installed.avif",
    content: {
      introduction: "The 'Driver Not Installed' message is one of the most common topics Windows users encounter when connecting new hardware. Without the correct driver, your operating system cannot communicate with the device.",
      reasons: [
        "Windows Update did not find a compatible driver automatically.",
        "The driver was never added for the new hardware.",
        "A previous process was interrupted or incomplete.",
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
          title: "Look on Manufacturer Website",
          text: "Find the model number of your device. Go to the manufacturer's official support website (e.g., HP, Dell, NVIDIA) and search for the latest drivers."
        },
        {
          title: "Manual Process",
          text: "If you have the driver file, right-click the device in Device Manager, select 'Update driver', and choose 'Browse my computer for drivers'."
        }
      ]
    }
  },
  {
    slug: "understand-printer-driver-topics",
    title: "Understanding Common Printer Driver Topics",
    desc: "Is your printer not responding? Follow this guide to understand driver data and connectivity.",
    img: "/guide/guide-printer-driver.avif",
    content: {
      introduction: "Printer driver topics can manifest as 'Printer Offline' status, partial printing, or a total lack of response from the device despite being connected.",
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
    slug: "understand-audio-driver-topics",
    title: "Understanding Audio and Sound Driver Topics",
    desc: "Learn about 'No Audio Output Device is installed' and other sound-related topics on your PC.",
    img: "/guide/guide-audio-driver.avif",
    content: {
      introduction: "Audio topics can range from a complete lack of sound to crackling noise or low volume levels. Most are software-driven.",
      reasons: [
        "Audio services disabled in Windows.",
        "Incorrect playback device selected in settings.",
        "Realtek or other audio driver data corruption.",
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
    slug: "understand-wifi-network-topics",
    title: "Understanding WiFi and Network Connection Topics",
    desc: "Step-by-step guide to understanding wireless adapter drivers and network connectivity.",
    img: "/guide/guide-network-driver.avif",
    content: {
      introduction: "Network topics are critical. A corrupted Wi-Fi driver can prevent you from downloading the data itself, often requiring a second device.",
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
    slug: "understand-usb-driver-topics",
    title: "Understanding 'USB Device Not Recognized' Topics",
    desc: "Identify USB 3.0/3.1 port recognition and driver data for your external devices.",
    img: "/guide/guide-usb-driver.avif",
    content: {
      introduction: "USB topics are interesting because they often involve the motherboard's chipset drivers or power delivery systems.",
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
    slug: "understand-graphics-driver-topics",
    title: "Understanding Graphics Driver Data",
    desc: "Identify screen flickering, low FPS, and display topics by properly managing your GPU drivers.",
    img: "/guide/guide-graphics-driver.avif",
    content: {
      introduction: "Graphics drivers control everything you see. Outdated GPU software can cause crashes in games and visual artifacts in apps.",
      reasons: [
        "Incomplete data for NVIDIA/AMD/Intel software.",
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
          text: "Sometimes an error is triggered by a faulty HDMI or DisplayPort cable. Try a different port if possible."
        }
      ]
    }
  },
  {
    slug: "understand-bluetooth-driver-topics",
    title: "Understanding Bluetooth Pairing and Connection Topics",
    desc: "Identify missing Bluetooth icon, pairing failures, and driver topics on your Windows PC.",
    img: "/needdriver/need-audio-wifi.avif",
    content: {
      introduction: "Bluetooth is essential for connecting wireless peripherals like headphones, mice, and keyboards. Driver topics can make the Bluetooth toggle disappear entirely from your settings.",
      reasons: [
        "Bluetooth service is disabled in Windows Services.",
        "Outdated or incompatible Bluetooth radio drivers.",
        "Interference from other wireless devices.",
        "Airplane mode is accidentally enabled."
      ],
      steps: [
        {
          title: "Check Bluetooth Services",
          text: "Press Win+R, type 'services.msc'. Find 'Bluetooth Support Service', ensure it's 'Running' and set to 'Automatic'."
        },
        {
          title: "Update Bluetooth Driver",
          text: "In Device Manager, expand 'Bluetooth'. Right-click your Bluetooth adapter and select 'Update driver'."
        },
        {
          title: "Remove and Re-pair Device",
          text: "Go to Bluetooth settings, 'Remove device', then try pairing it again from scratch."
        }
      ]
    }
  },
  {
    slug: "understand-webcam-driver-topics",
    title: "Understanding Webcam and Camera Topics",
    desc: "Identify 'Camera not found' and black screen topics in Zoom, Teams, and other apps.",
    img: "/guide/webcam-drivers.avif",
    content: {
      introduction: "Webcam topics are often caused by privacy settings or outdated drivers, especially after a Windows update.",
      reasons: [
        "Camera privacy settings blocking access.",
        "Outdated or corrupted webcam drivers.",
        "Conflict with other video applications.",
        "Hardware switch or shutter is closed."
      ],
      steps: [
        {
          title: "Check Privacy Settings",
          text: "Go to Settings > Privacy > Camera. Ensure 'Allow apps to access your camera' is turned ON."
        },
        {
          title: "Reinstall Camera Driver",
          text: "In Device Manager, right-click your camera under 'Cameras' or 'Imaging devices' and select 'Uninstall device'. Restart your PC."
        },
        {
          title: "Check for Physical Switches",
          text: "Some laptops have a physical slider or a function key (like F10 or F6) to disable the camera."
        }
      ]
    }
  },
  {
    slug: "understand-scanner-driver-topics",
    title: "Understanding Scanner Connectivity and Driver Topics",
    desc: "Identify scanner not detected, 'Busy' status, and communication topics with your multifunction printer.",
    img: "/needdriver/need-printer-scanner.avif",
    content: {
      introduction: "Scanners often require specific WIA (Windows Image Acquisition) or TWAIN drivers to communicate with scanning software.",
      reasons: [
        "WIA service not running.",
        "Incompatible TWAIN drivers for older scanners.",
        "USB connection issues or loose cables.",
        "Scanner locked by another application."
      ],
      steps: [
        {
          title: "Restart WIA Service",
          text: "In 'services.msc', find 'Windows Image Acquisition (WIA)'. Right-click and select 'Restart'."
        },
        {
          title: "Update Scanner Drivers",
          text: "Download the specific 'Scanner Driver' or 'Scan Utility' from the manufacturer's website rather than just the printer driver."
        },
        {
          title: "Check Cable and Port",
          text: "Ensure the USB cable is securely connected directly to the PC, avoiding USB hubs if possible."
        }
      ]
    }
  },
  {
    slug: "guide-chipset-drivers",
    title: "Guide to Chipset and Motherboard Drivers",
    desc: "Understand system stability, USB speed, and power management by learning about your motherboard's chipset drivers.",
    img: "/guide/chipset-info.avif",
    content: {
      introduction: "Chipset drivers tell Windows how to communicate with the motherboard's core components, including USB controllers and power management systems.",
      reasons: [
        "System instability or frequent error screens.",
        "Slow data transfer over USB ports.",
        "New hardware components not being recognized properly.",
        "Power management (Sleep/Hibernate) topics."
      ],
      steps: [
        {
          title: "Identify Your Motherboard",
          text: "Type 'msinfo32' in Windows search. Look for 'BaseBoard Manufacturer' and 'BaseBoard Product'."
        },
        {
          title: "Look for Official Chipset Drivers",
          text: "Visit the manufacturer's site (Intel, AMD, ASUS, etc.) and search for the 'Chipset' category."
        },
        {
          title: "Installer Process",
          text: "Chipset drivers usually come as an executable. Run it and restart your system to apply changes."
        }
      ]
    }
  },
  {
    slug: "guide-bios-firmware-updates",
    title: "Guide to BIOS and System Firmware Topics",
    desc: "Learn the critical steps to understand BIOS/UEFI and support new hardware and security.",
    img: "/needdriver/need-windows-update.avif",
    content: {
      introduction: "BIOS/UEFI is the first software your PC runs. Understanding it can improve compatibility with new CPUs and RAM, but it must be done carefully.",
      reasons: [
        "Support for a newer generation of processors.",
        "Addressing critical security topics.",
        "Improving system boot times and stability.",
        "Resolving hardware compatibility topics."
      ],
      steps: [
        {
          title: "Check Current BIOS Version",
          text: "Type 'msinfo32' and look for 'BIOS Version/Date'."
        },
        {
          title: "Prepare a USB Drive",
          text: "Download the BIOS file from the official site. Many motherboards require the file to be on a FAT32 formatted USB drive."
        },
        {
          title: "Use Built-in Utility",
          text: "Enter BIOS (usually by pressing Del or F2 during boot) and use the 'EZ Flash' or 'M-Flash' tool to select the update file."
        }
      ]
    }
  },
  {
    slug: "understand-driver-update-topics",
    title: "Understanding 'Driver Update Failed' and Data Topics",
    desc: "Learn about 'Access Denied', 'Incompatible Hardware', and other common driver data topics.",
    img: "/needdriver/need-driver-errors.avif",
    content: {
      introduction: "A failed driver update can leave your device in an 'Unknown' state or cause system crashes. Understanding the code is key to the topic.",
      reasons: [
        "Digital signature verification failure.",
        "Conflicting remnants of old drivers.",
        "Antivirus software blocking the process.",
        "Insufficient system permissions."
      ],
      steps: [
        {
          title: "Clean Old Drivers",
          text: "Use 'Disk Cleanup' and select 'Device driver packages' to remove old versions that might be causing conflicts."
        },
        {
          title: "Disable Driver Signature Enforcement",
          text: "In advanced startup options, you can temporarily disable signature enforcement if installing a verified legacy driver."
        },
        {
          title: "Administrator Permissions",
          text: "Right-click the driver installer and select 'Run as administrator' to ensure it has the necessary permissions."
        }
      ]
    }
  },
  {
    slug: "understand-input-latency-drivers",
    title: "Understanding Keyboard and Touchpad Lag Topics",
    desc: "Identify slow response times, ghosting, and laggy cursor movements on your laptop or PC.",
    img: "/guide/keyboard-input.avif",
    content: {
      introduction: "Input lag can be extremely frustrating, especially when it affects your productivity or experience. Often, it's caused by outdated HID (Human Interface Device) drivers or background processes.",
      reasons: [
        "Outdated chipset or HID drivers.",
        "Power management settings putting devices to sleep.",
        "High CPU usage causing input processing delays.",
        "Wireless interference for Bluetooth keyboards/mice."
      ],
      steps: [
        {
          title: "Update HID Drivers",
          text: "In Device Manager, expand 'Keyboards' and 'Mice and other pointing devices'. Right-click and update all drivers."
        },
        {
          title: "Change Power Management",
          text: "For laptops, go to Device Manager > Mice and other pointing devices > Properties > Power Management. Uncheck 'Allow the computer to turn off this device to save power'."
        },
        {
          title: "Disable Filter Keys",
          text: "Go to Settings > Accessibility > Keyboard. Ensure 'Filter Keys' is turned OFF, as it can cause intentional delay."
        }
      ]
    }
  },
  {
    slug: "understand-device-not-detected",
    title: "Understanding When Windows Doesn't Detect Your Device",
    desc: "A comprehensive guide to identifying hardware that doesn't show up in Device Manager.",
    img: "/guide/storage-drives.avif",
    content: {
      introduction: "When a device isn't detected at all, it's often a connection topic or a missing parent driver (like a USB controller or chipset driver) rather than just the device driver itself.",
      reasons: [
        "Loose physical connection or faulty cable.",
        "Disabled port in BIOS/UEFI.",
        "Missing motherboard chipset drivers.",
        "Faulty hardware or power supply topics."
      ],
      steps: [
        {
          title: "Scan for Hardware Changes",
          text: "In Device Manager, click on 'Action' > 'Scan for hardware changes'. This forces Windows to re-poll all ports."
        },
        {
          title: "Check Hidden Devices",
          text: "In Device Manager, click 'View' > 'Show hidden devices'. The device might be present but disabled or disconnected."
        },
        {
          title: "Try a Different Port",
          text: "Always test the device on a different USB port (preferably on the back of the PC for desktops) to rule out port failure."
        }
      ]
    }
  }
];
