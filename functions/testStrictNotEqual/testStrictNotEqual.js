/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   testStrictNotEqual.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yel-aziz <yel-aziz@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/30 23:30:15 by yel-aziz          #+#    #+#             */
/*   Updated: 2022/08/30 23:30:36 by yel-aziz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function testStrictNotEqual(val) {
    if (val !== 17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual("17");