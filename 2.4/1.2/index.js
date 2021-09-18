function submit()
{
    let n=parseInt(document.getElementById('input').value);
    let i,sum=0;

    for(i=1;i<=n;i++)
    {
        sum=sum+i;
    }
    document.write(sum);
}