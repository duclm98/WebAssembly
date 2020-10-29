#include <string.h>

void numLog(int n);

void strLog(char* offset, int length);

void greet(){
  char* msg = "Hello from C";
  strLog(msg, strlen(msg));
}

int main() { 
  return 42;
}

void getNumber(int x){
  numLog(x*2);
}