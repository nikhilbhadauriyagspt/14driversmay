export const blogsData = [
  {
    id: 1,
    title: 'Understanding Modern Driver Architectures',
    date: 'Jan 23, 2026',
    author: 'Admin',
    shortDesc: 'Deep dive into how modern hardware drivers communicate with Windows 11.',
    longDesc: `
      <p>Modern computing systems rely on complex driver-level communication to maintain stability. Understanding how these architectures work is essential for system maintenance.</p>
      
      <h4>1. The Role of the Kernel Mode</h4>
      <p>Most critical drivers, like graphics and storage, operate in the Kernel Mode of the operating system. This allows them direct access to system memory and hardware resources.</p>
      
      <h4>2. Plug and Play (PnP) Protocols</h4>
      <p>The PnP manager in Windows automatically identifies hardware IDs and matches them with the correct technical documentation in the system registry.</p>
      
      <h4>3. Version Synchronization</h4>
      <p>Ensuring that your software layer matches your hardware's firmware version prevents architectural conflicts that lead to system instability.</p>

      <h4>4. Hardware Abstraction Layers (HAL)</h4>
      <p>The HAL acts as a bridge, allowing the same operating system to run on different hardware configurations by providing a consistent interface.</p>
    `,
    image: '/projects/device-driver-1.jpg'
  },
  {
    id: 2,
    title: 'Hardware Troubleshooting Documentation',
    date: 'Jan 20, 2026',
    author: 'Admin',
    shortDesc: 'A guide to reading system error codes and hardware recognition logs.',
    longDesc: `
      <p>Identifying hardware errors requires systematic analysis of system logs and error codes. Here is a technical overview of common diagnostic data:</p>
      
      <h4>1. Device Manager Status Codes</h4>
      <p>Error codes like Code 10 or Code 43 indicate specific communication failures between the hardware registry and the physical component.</p>
      
      <h4>2. Hardware Interrupts (IRQ)</h4>
      <p>Technical conflicts often arise when two hardware components attempt to use the same interrupt request line. Modern BIOS/UEFI manages this automatically.</p>
      
      <h4>3. Data Packet Integrity</h4>
      <p>Network and USB drivers rely on precise data packet timing. Architectural latency can cause these protocols to fail, requiring a reset of the communication stack.</p>

      <h4>4. Driver Rollback Procedures</h4>
      <p>When new documentation is incompatible with legacy hardware, reverting to a previously verified version is the standard technical resolution.</p>
    `,
    image: '/projects/what-is-a-computer-device-driver.png'
  },
  {
    id: 3,
    title: 'BIOS and UEFI Technical Overview',
    date: 'Jan 15, 2026',
    author: 'Admin',
    shortDesc: 'How low-level firmware documentation affects system performance.',
    longDesc: `
      <p>The BIOS/UEFI is the first software to run when a computer starts. It initializes all hardware components according to documented protocols.</p>
      
      <h4>1. Post-initialization Sequences</h4>
      <p>During startup, the system performs a Power-On Self-Test (POST) to ensure all documented hardware components are responding correctly.</p>
      
      <h4>2. Secure Boot Protocols</h4>
      <p>Modern UEFI documentation includes security signatures that verify the integrity of the operating system loader before execution.</p>
      
      <h4>3. Overclocking and Power States</h4>
      <p>Firmware documentation defines the voltage and frequency limits of your CPU and RAM to maintain architectural integrity.</p>

      <h4>4. Legacy BIOS Compatibility</h4>
      <p>CSM (Compatibility Support Module) allows modern hardware to run legacy documentation protocols, though it is being phased out for full UEFI support.</p>
    `,
    image: '/projects/device-driver.png'
  }
];
