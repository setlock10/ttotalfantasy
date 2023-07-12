{

    s1=$1;
    s2=$2;
    s3=$3;
    s4=$4;
    s5=$5;
    s6=$6;
    s7=$7;
    s8=$8;
    



    #printf ("%15.1f%25s%15.1f%15.1f%15.1f%15.1f%15.1f%15.1f%15.1f\n", s1, s2, s3, s4, s5, s6, s7, s8)

    printf ("{\n")
    printf ("\"%s\":\"%d\"\,\n","number",s1)
    printf ("\"%s\":\"%s\"\,\n","name",s2)
    printf ("\"%s\":\"%3.1f\"\,\n","win_total",s3)
    printf ("\"%s\":\"%d\"\,\n","over_juice",s4)
    printf ("\"%s\":\"%d\"\,\n","under_juice",s5)
    printf ("\"%s\":\"%d\"\,\n","pot",s6)
    printf ("\"%s\":\"%d\"\,\n","eos_elo",s7)
    printf ("\"%s\":\"%s\"\n","playoffs_2022",s8)
    

    printf ("},\n")

}