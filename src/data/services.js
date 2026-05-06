import { 
  FaMicrochip, FaDesktop, FaVolumeUp, FaWifi, 
  FaHdd, FaUsb, FaBluetooth, FaKeyboard, 
  FaPrint, FaSearchPlus, FaVideo, 
  FaCode, FaShieldAlt, FaTv 
} from 'react-icons/fa';

export const servicesData = [
  // ESSENTIAL DRIVERS
  {
    id: 1,
    iconName: "FaMicrochip",
    title: "Chipset Information",
    shortDesc: "The central traffic controller for motherboard architecture.",
    longDesc: "Chipset documentation defines how the CPU interacts with the motherboard, RAM, and storage. It coordinates hardware resources for system stability.",
    topics: [
      { point: "System Stability", description: "Understand how chipset data affects system coordinate and stability." },
      { point: "Hardware Recognition", description: "Identify how internal components or RAM modules are detected by the system." }
    ],
    features: ["CPU-RAM Sync", "Bus Architecture Support", "Data Flow Management"],
    slug: "chipset-information"
  },
  {
    id: 2,
    iconName: "FaDesktop",
    title: "Graphics Information",
    shortDesc: "Visual rendering data for GPU & Screen.",
    longDesc: "Graphics documentation explains software instructions and visual commands for your GPU to render 3D environments, 4K video, and UI elements.",
    topics: [
      { point: "Display Behavior", description: "Identify why displays might flash or show lines based on driver data." },
      { point: "Resolution Settings", description: "Learn about resolution limits and hardware acceleration basics." }
    ],
    features: ["4K Resolution Support", "3D Rendering", "Hardware Acceleration"],
    slug: "graphics-information"
  },
  {
    id: 3,
    iconName: "FaVolumeUp",
    title: "Audio Information",
    shortDesc: "Managing sound input and output data.",
    longDesc: "Audio documentation handles the conversion of digital signals into analog sound for speakers and processes signals from microphones.",
    topics: [
      { point: "Sound Output", description: "Understand why speakers might produce no audio based on software settings." },
      { point: "Audio Quality", description: "Explore factors affecting sound quality and jack sensing logic." }
    ],
    features: ["HD Audio Processing", "Noise Cancellation", "Jack Sensing"],
    slug: "audio-information"
  },
  {
    id: 4,
    iconName: "FaWifi",
    title: "Network Information",
    shortDesc: "Connecting via Wi-Fi and Ethernet data.",
    longDesc: "Network documentation enables communication with external networks, handling packet transmission and handshake protocols with routers.",
    topics: [
      { point: "Connection Stability", description: "Understand factors affecting internet connection stability and drops." },
      { point: "Connectivity Status", description: "Identify why Wi-Fi might show 'No Internet' based on protocol data." }
    ],
    features: ["Wi-Fi 6 Support", "Low-Latency LAN", "Packet Optimization"],
    slug: "network-information"
  },

  // HARDWARE-SPECIFIC
  {
    id: 5,
    iconName: "FaHdd",
    title: "Storage Data",
    shortDesc: "Data transfer logic for SSDs and HDDs.",
    longDesc: "Documentation on the critical path between the OS and physical drives, explaining read/write speeds and data integrity protocols.",
    topics: [
      { point: "Boot Speed", description: "Learn about factors affecting system boot times and login screen speed." },
      { point: "Drive Detection", description: "Identify why secondary SSDs might not appear in system explorers." }
    ],
    features: ["NVMe Optimization", "RAID Support", "Data Integrity"],
    slug: "storage-controller"
  },
  {
    id: 6,
    iconName: "FaUsb",
    title: "USB Information",
    shortDesc: "Port recognition and connectivity data.",
    longDesc: "Documentation on how system resources are assigned to USB ports, supporting data transfer and power delivery logic.",
    topics: [
      { point: "Device Recognition", description: "Understand why flash drives or mice might not be recognized when plugged in." },
      { point: "Port Power", description: "Identify how USB ports provide power to connected external devices." }
    ],
    features: ["USB 3.2 Protocols", "Plug & Play Support", "Resource Allocation"],
    slug: "usb-information"
  },
  {
    id: 7,
    iconName: "FaBluetooth",
    title: "Bluetooth Information",
    shortDesc: "Wireless pairing protocols for peripherals.",
    longDesc: "Documentation on radio frequency protocols for pairing with headphones, keyboards, and mobile devices.",
    topics: [
      { point: "Pairing Logic", description: "Learn why devices might fail to find each other via Bluetooth protocols." },
      { point: "Audio Sync", description: "Understand delay factors in wireless headphone sound and signal stability." }
    ],
    features: ["Low-Latency Sync", "Multi-Device Pairing", "Signal Stability"],
    slug: "bluetooth-information"
  },
  {
    id: 8,
    iconName: "FaKeyboard",
    title: "Input Information",
    shortDesc: "Precision input and gesture data.",
    longDesc: "Documentation on how physical gestures and keystrokes are translated into OS signals, including multi-touch logic.",
    topics: [
      { point: "Input Response", description: "Understand delay factors between typing and letters appearing on screen." },
      { point: "Gesture Translation", description: "Identify why multi-touch or scroll gestures might stop responding." }
    ],
    features: ["Multi-Touch Support", "Key Mapping", "Sensitivity Logic"],
    slug: "input-information"
  },

  // PERIPHERAL DRIVERS
  {
    id: 9,
    iconName: "FaPrint",
    title: "Printer Information",
    shortDesc: "Digital to physical document translation data.",
    longDesc: "Documentation on how digital files are converted into printer-ready commands, explaining spooling and color accuracy.",
    topics: [
      { point: "Spooler Logic", description: "Understand why documents might get stuck in the system print queue." },
      { point: "Connection Status", description: "Identify why printers show 'Offline' status despite being connected." }
    ],
    features: ["Color Management", "Spooling Logic", "Device Handshake"],
    slug: "printer-information"
  },
  {
    id: 10,
    iconName: "FaSearchPlus",
    title: "Scanner Information",
    shortDesc: "Digitizing and OCR protocol documentation.",
    longDesc: "Documentation on communication with scanning hardware to convert physical documents into digital formats.",
    topics: [
      { point: "Detection Topics", description: "Identify why scanning software might not detect the hardware protocols." },
      { point: "Image Quality", description: "Understand factors affecting scanned image resolution and quality." }
    ],
    features: ["TWAIN Support", "OCR Integration", "Image Processing"],
    slug: "scanner-information"
  },
  {
    id: 11,
    iconName: "FaVideo",
    title: "Webcam Information",
    shortDesc: "Video capture and streaming data.",
    longDesc: "Documentation on camera sensor settings, resolution protocols, and frame rates for video streaming.",
    topics: [
      { point: "Sensor Detection", description: "Learn why apps might report 'No camera detected' based on driver status." },
      { point: "Video Quality", description: "Understand resolution control and sensor management for clear video." }
    ],
    features: ["Resolution Control", "Frame Rate Sync", "Sensor Management"],
    slug: "webcam-information"
  },

  // ADVANCED SYSTEMS
  {
    id: 12,
    iconName: "FaCode",
    title: "BIOS/UEFI Information",
    shortDesc: "Pre-boot hardware initialization data.",
    longDesc: "Documentation on crucial firmware that performs system checks before loading the operating system.",
    topics: [
      { point: "Boot Process", description: "Understand the pre-boot initialization and hardware check logic." },
      { point: "System Clock", description: "Learn how the system maintains time and date settings in firmware." }
    ],
    features: ["Hardware Init", "Microcode Patching", "POST Checks"],
    slug: "bios-uefi-firmware"
  },
  {
    id: 13,
    iconName: "FaShieldAlt",
    title: "Security Data",
    shortDesc: "Encryption and secure boot documentation.",
    longDesc: "Documentation on hardware-level encryption and system integrity checks during the boot process.",
    topics: [
      { point: "System Compatibility", description: "Learn about TPM and secure boot requirements for modern OS versions." },
      { point: "Encryption Logic", description: "Understand how Bitlocker and other security protocols protect data." }
    ],
    features: ["TPM 2.0 Support", "Encryption Logic", "Secure Boot Sync"],
    slug: "security-drivers"
  },
  {
    id: 14,
    iconName: "FaTv",
    title: "Monitor Information",
    shortDesc: "Color and refresh rate data.",
    longDesc: "Documentation on timing and color profile data sent to monitors for visual rendering.",
    topics: [
      { point: "Refresh Protocols", description: "Understand how refresh rates affect visual smoothness and lag." },
      { point: "Color Profiles", description: "Learn about ICC profiles and EDID management for color accuracy." }
    ],
    features: ["ICC Profile Sync", "Refresh Rate Logic", "EDID Management"],
    slug: "monitor-calibration"
  }
];
