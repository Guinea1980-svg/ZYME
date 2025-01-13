@echo off
:Loop
echo %cd%^>
set /p cmd=SkYWAGz Enter Command to Run (Press Ctrl + C to exit)
%cmd%
Goto Loop
