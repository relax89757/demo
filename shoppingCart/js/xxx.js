
        window.onload=function(){
            var color = document.querySelector('.color'),
                cspan = color.querySelectorAll('span'),
                price = document.querySelector('.price'),
                btn = document.querySelector('.btn'),
                rom = document.querySelector('.rom'),
                rspan = rom.querySelectorAll('span'),
                num = document.querySelector('.num'),
                detail = document.querySelector('.detail'),
                img = document.querySelector('img');

            
            // 先创建一个对象保存当前商品信息
           
            // function goodsObj(){
            //     this.qty = 1;
            //     this.color;
            //     this.rom;
            //     this.mname;
            //     this.price;
            // };

            //  // goodsObj.prototype.add = function(name){
            //  //     this[name] = name;
                 
            //  // }
            //  var goods = new goodsObj();


                color.addEventListener('click', function(e){
                    e = e || window.e;
                    var target = e.target || e.srcElement;
                    
                    if(target.tagName.toLowerCase() === 'span'){
                        
                        for (var i = 0; i < cspan.length; i++) {
                            cspan[i].className = '';
                        }
                        //color.childNodes.classdata = '';
                        target.className = 'on';
                        var mdata = target.getAttribute('data');
                        var mname = target.innerHTML;
                        img.src = './img/iphone6s-'+mdata+'.png';
                        // goods.add(mdata);
                        // goods.add(mname);
                        // goods.color = mdata;
                        // goods.mname = mname;
                    }
                    
                    
                    // console.log(goods.color,goods.mname,11);
                    // return goods;
                },false);

                

                rom.addEventListener('click', function(e){
                    e = e || window.e;
                    var target = e.target || e.srcElement;
                    if(target.tagName.toLowerCase() === 'span'){
                        
                        for (var i = 0; i < rspan.length; i++) {
                            rspan[i].className = '';
                        }
                        
                        target.className = 'on';
                        rom = target.getAttribute('data');
                        //console.log(rdata,222);
                        
                        switch(rom){
                            case '16g':
                                price.innerHTML = '￥5288';
                                break;
                            case '64g':
                                price.innerHTML = '￥6088';
                                break;
                            case '128g':
                                price.innerHTML = '￥6888';
                                break;        
                        }
                        mprice = price.innerHTML;
                        btn.disabled=false;
                        // goods.add(rom) ;
                        // goods.add(mprice) ;
                    }
                    
                    // goods.rom = rom;
                    // goods.price = mprice;
                    // console.log(goods.rom,goods.price,22);
                    // return goods;
                },false);

        
            var count = 0;
            //用于保存购物车商品信息
            var cartList = [];


            // 先获取当前cookie
            // var cookies = document.cookie.split('; ');
            
            // for(var i=0;i<cookies.length;i++){
            //     var arr = cookies[i].split('=');
            //     if(arr[0] === 'cartlist'){
            //         cartList = JSON.parse(arr[1]);
            //     }
            // }

           // 如果cookie为空，则直接添加
            
            
            btn.onclick = function(){
                count++;
                num.style.display='block';
                num.innerHTML = count;
                var ontext = document.querySelectorAll('.on'),
                    mprice = document.querySelector('.price'),
                    color = ontext[0].innerHTML,
                    rom = ontext[1].innerHTML,
                    price = mprice.innerHTML;

                
                var goodsObj = {
                    color: color,
                    rom: rom,
                    price: price,
                    qty: 1
                };
                console.log(goodsObj,33);

                // var goods = new goodsObj();
                
                // var  test = new goodsObj();
                // test.price = goods.price;
                // test.qty = goods.qty;
                // test.color = goods.color;
                // test.mname = goods.mname;
                // test.rom = goods.rom;
                //  cartList.push(test);
                 //console.log(cartList,33);
                if(cartList.length===0){
                    cartList.push(goodsObj);
                }else{
                    // 先判断cookie中有无相同的guid商品
                    for(var i=0;i<cartList.length;i++){
                        // 如果商品已经存在cookie中，则数量+1
                        if(cartList[i].color === goodsObj.color && cartList[i].rom === goodsObj.rom){
                            cartList[i].qty++;
                            break;
                        }
                     }
                    if(i===cartList.length){
                        // 添加到cartList
                        cartList.push(goodsObj);
                    }
                }
                
                console.log(cartList,44);
                  
                
               
                
                

                //cartList.push(goodsObj);

                // 存入localStorage
                // 把对象/数组转换诚json字符串：JSON.stringify()
               
                
                carts = JSON.stringify(cartList);
                localStorage.setItem("carts",carts);
                
                //console.log(localStorage,55);
            }

             // document.cookie = 'cartList=' + JSON.stringify(cartList);
               // carts = JSON.stringify(cartList);
               //  localStorage.setItem("carts",carts);
           
        }
 