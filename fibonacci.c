#include <stdio.h>

int main() {
  int i,n,primo,secondo,terzo;

  printf("Quanti numeri della successione vuoi visualizzare? ");
  scanf("%d", &n);

  primo=1;
  secondo=1;

  printf("%d\n",primo);
  printf("%d\n",secondo);

  for(i=2;i<n;i++) {
      terzo=primo+secondo;
      primo=secondo;
      secondo=terzo;
      printf("%d\n",terzo);
  }
}
