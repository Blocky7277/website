---
title: PDM
desc: The Power Distribution Module for the Stratos control system. An STM32-based board that powers the ready-to-drive speakers, lighting, and cooling on our FSAE electric vehicle. I wrote its firmware, including CAN communication with the other low-voltage boards (filtered using the vehicle's DBC file), a C driver for the EMC2303 fan controller over SMBus, and a ThreadX-based SMBus queue on a dedicated thread keeps two tasks from accessing the fan controllers at once and failing silently. 
in_portfolio: true
in_archive: true
tags: C, STM32, RTOS (ThreadX), CAN, SMBus, Embedded Systems,
git: https://github.com/iitmotorsports/pdm/
---
