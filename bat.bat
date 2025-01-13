@echo off
break off
title Command Prompt
cls
:cmd
set /p cmd="%cd%>"
%cmd%
echo.
goto cmd
