<!--
  Copyright 2015 Norut Northern Research Institute
  Author : Ingar Mæhlum Arntzen and Njål Trygve Borch

  This file is part of MotionLib [MediaScape SharedMotion JavaScript client-side library].

  MotionLib is free software: you can redistribute it and/or modify
  it under the terms of the GNU Lesser General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  MotionLib is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public License
  along with MotionLib.  If not, see <http://www.gnu.org/licenses/>.
-->


# Shared Motion

In this folder you will find the MediaScape Shared Motion library (client-side) adapted for [MediaScape project](http://mediascapeproject.eu/).

## Navigation
[Goals][] | [Dependencies][] | [Structure][] | [Documentation][] | [Authors][] | [License][]

### Goals
[Top][]

MediaScape targets applications that provide shared experiences across multiple devices.

This client-side JavaScript library provides access to Shared Motions hosted by Motion Corporation. Shared Motion a generic programming concept for precise, distributed temporal control across the Internet.

Shared Motion introduces shared (i.e. synchronized) applications clocks into the Web domain, without making the assumption of synchronized system clocks. Instead, ad-hoc, application level clock synchronisation is performed every time a client connects to an online timing resource (i.e., motion). This guarantees availability of synchronized clocks for application logic on any connected device. The precision of such application-level clocks may be slightly coarser than expected for lower-level synchronization of system-clocks (i.e. millisecond as opposed to microsecond) Still, millisecond precision is suitable for the Web domain in general, and Mediascape use cases in particular. 

In addition to clock synchronization, shared motion provides a programming model where applications may define and take direction from many different motions and interact with them in order to change temporal aspects of the application. Efficient, low latency propagation of update requests and change notifications is also encapsulated by the same mechanism.

Shared Motion is an object that describes how an abstract point moves (in time) along a line. The motion describes in detail the position of the point, its velocity and acceleration at a given time. This information is represented by a vector [position, velocity, acceleration, time]. Shared motion is a simple concept encapsulating and solving four important technical challenges in multi-device applications; 

- Distributed media control (i.e. remote controlling)
- Distributed simultaneity.
- Distributed timing (i.e. controlling precisely when stuff happens)
- Interoperability and Extensibility. 

Shared Motion has been proposed for Web standardization, by MediaScape partners through the [W3C Multi-device Timing Community Group](https://www.w3.org/community/webtiming/), as basis for a new multi-device timing model in the Web. The central concept in this inititive is the [Timing Object](http://webtiming.github.io/timingobject/), which is based on Shared Motion.


### Dependencies
[Top][]

A commercial company Motion Corporation has developed a production quality implementation of Shared Motion, and agreed to provide MediaScape with free of charge usage (limited to research purposes) throughout the project period. Norut has licenced the use of Motion Corporation services on behalf of MediaScape, and has also adapted the client-side library to fit API's defined in MediaScape.

We recommend using scripts provided by Motion Corporation at the following link.

* [http://mcorp.no/lib/mcorp-2.0.js](http://mcorp.no/lib/mcorp-2.0.js)

Documentation for use is found at Motion Corporation

* [http://dev.mcorp.no](http://dev.mcorp.no)


For further experimentation with Shared Motion, please create a developer account and create your motions at [Motion Corporation](http://dev.motioncorporation.com).

The Shared Motion library is vanilla JavaScript and should run in every modern browser.

### Structure
[Top][]

The generic structure of mediascape repositories is:

  * API: The JavaScript API.
  * complements: additional elements for extra and optional features.
  * helloworld: minimal sample code.

### Documentation
[Top][]

Please find detailed documentation in [API Doc](API/Sharedmotion/README.md) and [DEMO Doc](helloworld/README.md)

### Authors
[Top][]

- Ingar Mæhlum Arntzen (ingar.arntzen@norut.no)
- Njål Trygve Borch (njaal.borch@norut.no)

### License
[Top][]

Copyright 2015 Norut Northern Research Institute.
Author : Ingar Mæhlum Arntzen and Njål Trygve Borch

MotionLib is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

MotionLib is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with MotionLib.  If not, see [http://www.gnu.org/licenses/](http://www.gnu.org/licenses/).

[Top]: #navigation
[Goals]: #goals
[Dependencies]: #dependencies
[Structure]: #structure
[Documentation]: #documentation
[Authors]: #authors
[License]: #license
