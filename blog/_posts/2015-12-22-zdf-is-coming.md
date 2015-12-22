---
layout: post
title:  "ZDF Is Coming"
date:   2015-12-22 12:04:00
categories: zdf
tags: zdf
---
I'm tired of putting up with PDFs. They are an awful document format for users and even worse for developers. Why do we continue to use an archaic format when other areas, particularly the web, have rapidly developed over the past few years? Generating PDFs with code is painful and generating them with some type of converter (ex. HTML to PDF) never works the way you'd like it and limits the ability of advanced features. So why has no format replaced it?

Now that I've ranted a little, I'm proposing a new format: [Zero Document Format](https://github.com/team-zdf/zdf). ZDF attempts to include every feature that PDF supports, while improving and adding new features. It accomplishes all of its goals with minimal new specification; it builds upon existing, open standards. For example, security and verification is handled via public key cryptography. Rendering is simply HTML and CSS. Forms are basic HTML forms. These technologies are industry proven common standards.

I'll be doing more posts about why ZDF is the successor to PDF in the future, but for now check out the draft specification on Github and let me know what you think.
