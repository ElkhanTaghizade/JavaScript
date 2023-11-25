var fullname="Elkhan Taghizade Elman"
var arr=[];
for (let i=0; i<fullname.length; i++)
{
    arr.push(fullname[i]);
}


for (let i=0; i<fullname.length; i++)
{
    if(fullname[i]=="T")
    {
        arr.splice(i,10)
        var char1=fullname[i+8]
        var char2=fullname[i+7]
        var char3=fullname[i+6]
        var char4=fullname[i+5]
        var char5=fullname[i+4]
        var char6=fullname[i+3]
        var char7=fullname[i+2]
        var char8=fullname[i+1]
        var char9=fullname[i]
        arr.unshift(" ")
        arr.unshift(char1)
        arr.unshift(char2)
        arr.unshift(char3)
        arr.unshift(char4)
        arr.unshift(char5)
        arr.unshift(char6)
        arr.unshift(char7)
        arr.unshift(char8)
        arr.unshift(char9)
    }
}
// for(var item of arr){
//     console.log(item);
//     }

    // var char=arr.toString()
    // console.log(char)


    let arr1 = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
    // var count=0
    // var  sum=0;
    // for(let  i=0; i<arr1.length; i++)
    // {
    //     if(arr1[i]==5)
    //     { count++}
    //     sum+=arr1[i]
    // }
    // console.log(count)
    // console.log(sum)

    // var  maxnum=arr1[0];
    // for(let  i=0; i<arr1.length; i++)
    // {
    //     if(maxnum<arr1[i])
    //     {
    //         maxnum=arr1[i]
    //     }
    // }
    // console.log(maxnum)

    // var maxnumcount=0;
    // for(let  i=0; i<arr1.length; i++)
    // {
    //     if(maxnum==arr1[i])
    //     {
    //        maxnumcount++
    //     }
    // }
    // console.log(maxnumcount)
    
    // var num=1;
    // for(var item of arr1)
    // {
    //     if(item==num)
    //     {console.log("Found")}
    // }
    // var  num3;
    // for(let  i=0; i<arr1.length; i++)
    // {
    //     if(arr1[i]%3==2)
    //     {
    //        num3=arr1[i]
    //        console.log(num3)
    //        console.log(i)
    //        break
    //     }
    // }

    // for(let  i=0; i<arr1.length; i++)
    // {
    //     if(arr1[i]==4)
    //     {
    //        console.log(i)
    //     }
    // }

    // var arr5=[]
    // for(let  i=0; i<arr1.length; i++)
    // {
    //     if(arr1[i]==5)
    //     {
    //        arr5.push(i)
    //     }
    // }
    // var maxnum5=arr5[0]
    // var minnum5=arr5[0]
    // for(let  i=0; i<arr5.length; i++)
    // {
    //     if(arr1[i]>maxnum5)
    //     {
    //         maxnum5=arr5[i]
    //     }
    //     if(arr1[i]<minnum5)
    //     {
    //         minnum5=arr5[i]
    //     }
    // }
    // console.log(minnum5,maxnum5)

    // let newarr = [4,5,2,1,5,93,2,5,3,5,6,2,1,6,83,26,2,6,2,5,3,2,7,4,6,4,73,5,6,2,30,5,6,3,7,3,7]
    // var dif=newarr.length-arr1.length
    // console.log(dif)

    let arr2 = [
        {
          name:'test', key:1
        },
        {
          name:'task',    key:2
        },
        {
          name:'tanqo',  key:3
        },
        {
          name:'like',   key:4
        },
        {
          name:'task',  key:5
        },
        {
          name:'trust',   key:6
        },
        {
          name:'test',  key:7
        },
        {
          name:'last',  key:8
        },
        {
          name:'tanqo',  key:9
        },
        {
          name:'elephant',   key:10
        },
        {
          name:'love',   key:11
        },
        {
          name:'small',  key:12
        },
        {
          name:'little',  key:13
        },
      ]
// var newarr=[]
// for(let  i=0; i<arr2.length; i++)
// {
//    if(arr2[i].name[0]=="t")
//    {
//     newarr.push(arr2[i])
//    }
// }
// for(var item of newarr){
//     console.log(item);
//     }

// var  count=0;
// for(let  i=0; i<arr2.length; i++)
// {
//    if(arr2[i].name[0]=="t" && arr2[i].name[arr2[i].name.length-1]=="t")
//    {
//     count++
//    }
// }
// // console.log(count)
// var word="SuperDev"
// for(let  i=0; i<arr2.length; i++)
// {
//    if(arr2[i].name[arr2[i].name.length-1]=="e")
//    {
//      arr2[i].name=arr2[i].name.replace(arr2[i].name,word)

//    }
// }
// for(var item of arr2){
//     console.log(item);
//     }
// var maxnuml=arr2[0].name.length
// var index=0;
// for(let i=0; i<arr2.length; i++)
// {
//   if(arr2[i].name.length>maxnuml)
//   {
//     maxnuml=arr2[i].name.length
//     index=i
//   }
// }
// console.log(arr2[index].key)
// console.log(index*index)
// var newarr=[];
// for(let i=0; i<arr2.length; i++)
// {
//   if(arr2[i].name.length==4)
//   {
//     newarr.push(arr2[i])
//   }
// }
// for(var item of newarr){
//   console.log(item);
//   }
// var maxkey=arr2[0].key
// var index=0;
// for(let i=0; i<arr2.length; i++)
// {
//   if(arr2[i].key>maxkey)
//   {
//     maxkey=arr2[i].key
//     index=i;
//   }
// }
//   console.log(arr2[index].name);



      

