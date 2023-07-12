{

    s1=$1;
    s2=$2;



    #printf ("%15.1f%25s%15.1f%15.1f%15.1f%15.1f%15.1f%15.1f%15.1f\n", s1, s2, s3, s4, s5, s6, s7, s8)

    printf ("{\n")
    printf ("\"%s\":\"%d\",\n","number",s1)
    printf ("\"%s\":\"%s\",\n","code",s2)
     

    printf ("},\n")

}