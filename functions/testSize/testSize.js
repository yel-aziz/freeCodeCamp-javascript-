/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   testSize.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yel-aziz <yel-aziz@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/30 23:55:02 by yel-aziz          #+#    #+#             */
/*   Updated: 2022/08/30 23:55:46 by yel-aziz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function testSize(num) {

    if(num < 5)
      return "Tiny";
    else if(num < 10)
      return "Small";
    else if(num < 15)
      return "Medium"
    else if(num < 20)
      return "Large";
    else 
      return "Huge";
  }
  
 console.log(testSize(7));
 console.log(testSize(700));